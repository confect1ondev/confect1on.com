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

// Load RSS feed 
async function loadRSSFeed() {
    try {
        // Try to fetch the RSS feed through a CORS proxy
        // Using cors-anywhere or allorigins as proxy services
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const feedUrl = 'https://kxra.substack.com/feed';
        
        const response = await fetch(proxyUrl + encodeURIComponent(feedUrl));
        if (response.ok) {
            const xmlText = await response.text();
            blogPosts = parseRSSFeed(xmlText);
            console.log('Loaded RSS feed:', blogPosts.length, 'posts');
        } else {
            throw new Error('Failed to fetch RSS feed');
        }
    } catch (error) {
        console.log('Could not fetch RSS feed, using fallback data:', error);
    }
    
    // Sort by date (newest first)
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