// Blog system using RSS feed from Substack
let blogPosts = [];

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Clean HTML and extract text
function stripHtml(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
}

// Extract description from content
function extractDescription(content, maxLength = 200) {
    // Remove HTML tags and get plain text
    let text = stripHtml(content);
    // Trim and limit length
    text = text.trim();
    if (text.length > maxLength) {
        text = text.substring(0, maxLength).trim() + '...';
    }
    return text;
}

// Parse RSS feed XML
function parseRSSFeed(xmlText) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    const posts = [];
    
    items.forEach(item => {
        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        const content = item.querySelector('content\\:encoded')?.textContent || description;
        
        // Extract categories/tags
        const categories = [];
        item.querySelectorAll('category').forEach(cat => {
            categories.push(cat.textContent);
        });
        
        posts.push({
            title: title,
            link: link,
            description: extractDescription(content || description),
            date: new Date(pubDate),
            tags: categories
        });
    });
    
    return posts;
}

const FEED_URL = 'https://kxra.substack.com/feed';
const CACHE_KEY = 'blogPostsCacheV1';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const FETCH_TIMEOUT_MS = 6000;

// Fetch with timeout and abort support
function fetchWithTimeout(url, { signal, timeout = FETCH_TIMEOUT_MS } = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort('timeout'), timeout);
    if (signal) signal.addEventListener('abort', () => controller.abort(signal.reason));
    return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
}

// Source adapters: each returns parsed posts[] or throws
const sources = [
    // rss2json: returns JSON directly, fastest and most reliable when available
    async (signal) => {
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;
        const res = await fetchWithTimeout(url, { signal });
        if (!res.ok) throw new Error(`rss2json ${res.status}`);
        const data = await res.json();
        if (data.status !== 'ok' || !Array.isArray(data.items)) throw new Error('rss2json bad payload');
        return data.items.map(item => ({
            title: item.title || '',
            link: item.link || '',
            description: extractDescription(item.content || item.description || ''),
            date: new Date(item.pubDate),
            tags: Array.isArray(item.categories) ? item.categories : []
        }));
    },
    // allorigins fallback (raw XML)
    async (signal) => {
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`;
        const res = await fetchWithTimeout(url, { signal });
        if (!res.ok) throw new Error(`allorigins ${res.status}`);
        const xml = await res.text();
        const posts = parseRSSFeed(xml);
        if (!posts.length) throw new Error('allorigins empty');
        return posts;
    }
];

// Race all sources; first success wins, others get aborted
function raceSources() {
    const controllers = sources.map(() => new AbortController());
    return new Promise((resolve, reject) => {
        let pending = sources.length;
        const errors = [];
        sources.forEach((fetcher, i) => {
            fetcher(controllers[i].signal)
                .then(posts => {
                    controllers.forEach((c, j) => { if (j !== i) c.abort('lost race'); });
                    resolve(posts);
                })
                .catch(err => {
                    errors.push(err);
                    if (--pending === 0) reject(new AggregateError(errors, 'all sources failed'));
                });
        });
    });
}

function readCache() {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const { ts, posts } = JSON.parse(raw);
        if (Date.now() - ts > CACHE_TTL_MS) return null;
        return posts.map(p => ({ ...p, date: new Date(p.date) }));
    } catch { return null; }
}

function writeCache(posts) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), posts }));
    } catch {}
}

async function loadRSSFeed() {
    const cached = readCache();
    if (cached && cached.length) {
        blogPosts = cached;
        // Refresh in the background so next visit has fresh data
        raceSources().then(posts => {
            writeCache(posts);
        }).catch(() => {});
    } else {
        try {
            const posts = await raceSources();
            blogPosts = posts;
            writeCache(posts);
        } catch (error) {
            console.warn('All blog feed sources failed:', error);
        }
    }

    blogPosts.sort((a, b) => b.date - a.date);
}

// Generate blog post HTML for listing
function generateBlogListHTML(post) {
    const tags = post.tags && post.tags.length > 0 ? post.tags.map(tag => 
        `<span class="blog-tag">${tag}</span>`
    ).join('') : '';
    
    return `
        <li class="blog-post-item">
            <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                <div class="blog-content">
                    <div class="blog-meta">
                        <time datetime="${post.date.toISOString()}">${formatDate(post.date)}</time>
                        ${tags}
                    </div>
                    <h3 class="h3 blog-item-title">${post.title}</h3>
                    <p class="blog-text">${post.description}</p>
                    <div class="blog-read-more">
                        <span>Read on Substack</span>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </a>
        </li>`;
}

// Initialize blog functionality
async function initializeBlog() {
    const blogList = document.querySelector('.blog-posts-list');
    
    if (blogList) {
        // Show loading state
        blogList.innerHTML = '<li class="blog-post-item"><p class="blog-text">Loading blog posts...</p></li>';
        
        // Load RSS feed data
        await loadRSSFeed();
        
        if (blogPosts.length > 0) {
            // Clear loading message
            blogList.innerHTML = '';
            
            // Add each blog post to the list
            blogPosts.forEach(post => {
                blogList.insertAdjacentHTML('beforeend', generateBlogListHTML(post));
            });
        } else {
            blogList.innerHTML = '<li class="blog-post-item"><p class="blog-text">No blog posts available yet. Check back soon!</p></li>';
        }
    }
}

// Export for use in other scripts
window.initializeBlog = initializeBlog;

// Initialize blog when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBlog);
} else {
    initializeBlog();
}