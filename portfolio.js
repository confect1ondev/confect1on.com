const portfolioProjects = [
    {
        year: 2026,
        title: "Free Range",
        category: "PIN-Auth Door Unlock Proxy for the DoorBird Cloud API",
        filterCategory: "development",
        icon: "lock-open-outline",
        description: "A Node.js proxy in front of the DoorBird cloud API that lets apartment owners unlock the door with a PIN instead of their phone. Hand out one-time codes to guests or deliveries, watch them in the event log, and keep the abuse surface down with per-IP rate limiting. Ships as a PWA with an admin panel.",
        stats: ["PIN Auth", "PWA"],
        tech: ["Node.js", "Express", "SQLite", "PWA"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/free-range" }
        ]
    },
    {
        year: 2026,
        title: "Rachel Bochner Tour 2026",
        category: "Official tour & album site for singer-songwriter Rachel Bochner",
        filterCategory: "development",
        client: "Rachel Bochner",
        icon: "mic-outline",
        favorite: true,
        featured: true,
        description: "Built rachelbochner.com in collaboration with Rachel Bochner to promote her first album and headline tour across the US. Features tour dates, album pre-save, contact info, and a pre-launch coming-soon page that flips to the live site at the scheduled launch time via an automated nginx symlink swap.",
        tech: ["TypeScript", "React", "Vite", "Nginx"],
        images: [
            { src: "https://raw.githubusercontent.com/confect1ondev/Rachel-Bochner-Tour-2026/refs/heads/main/_img/homepage.png", alt: "Rachel Bochner homepage" },
            { src: "https://raw.githubusercontent.com/confect1ondev/Rachel-Bochner-Tour-2026/refs/heads/main/_img/contactpage.png", alt: "Rachel Bochner contact page" },
            { src: "https://raw.githubusercontent.com/confect1ondev/Rachel-Bochner-Tour-2026/refs/heads/main/_img/countdown.png", alt: "Rachel Bochner pre-launch countdown" },
        ],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/Rachel-Bochner-Tour-2026" }
        ]
    },
    {
        year: 2026,
        title: "Rachel Bochner Single Reveal",
        category: "A promotional website for Rachel Bochner's first album!",
        filterCategory: "development",
        client: "Rachel Bochner",
        icon: "gift-outline",
        description: "An interactive code-redemption site that revealed the title of Rachel Bochner's first single one letter at a time. Codes were mailed to her top listeners of 2025, turning the reveal into a community puzzle that played out across her audience.",
        tech: ["Rust", "React", "Nginx"],
        images: [
            { src: "images/rb1-single-reveal.png", alt: "Rachel Bochner Single Reveal" },
        ],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/RB1-Single-Reveal" }
        ]
    },
    {
        year: 2026,
        title: "Collar",
        category: "Remote control your computers from your phone with HomeKit integration",
        filterCategory: "development",
        icon: "phone-portrait-outline",
        favorite: true,
        featured: true,
        description: "A four-part system that turns any phone into a control panel for your machines. A Rust daemon runs on each device, a Rust API server on a VPS brokers connections, a React web client drives the UI, and an optional Homebridge plugin exposes everything to HomeKit. The phone talks HTTPS to the server, which holds a WebSocket tunnel to each daemon. Security is built in: per-device API keys, per-IP rate limiting, and commands defined locally on the daemon so the server can never push arbitrary code.",
        stats: ["JWT + Per-Device Keys", "HomeKit Bridge"],
        tech: ["Rust", "React", "TypeScript", "WebSocket", "Homebridge", "Nginx"],
        images: [
            { src: "images/collar.png", alt: "Collar" },
        ],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/Collar" }
        ]
    },
    {
        year: 2025,
        title: "Declaring Security: How Declarative Operating Systems Reduce Drift",
        category: "A Case Study in NixOS with Implications for Enterprise Fleets",
        filterCategory: "research",
        icon: "document-text-outline",
        description: "A research paper arguing that declarativity should be treated as a security primitive in enterprise system management. Uses NixOS as a case study for how reproducible, code-driven configuration reduces drift, shortens incident recovery, and shrinks the attack surface compared to imperative provisioning.",
        stats: ["21 Pages", "Research Paper"],
        tech: [],
        favorite: true,
        links: [
            { icon: "document-outline", text: "PDF File", url: "https://drive.google.com/file/d/1mIOKwf1Eq7OlYQUR3-Fqu655tixUryjU/view" }
        ]
    },
    {
        year: 2025,
        title: "Sentinel",
        category: "Cross-platform Discord linking & moderation gateway for game servers",
        filterCategory: "development",
        client: "Landfall Studios",
        icon: "shield-checkmark-outline",
        description: "A cross-platform Discord account linking and moderation gateway for game servers. Links player accounts to Discord, enforces verification before login, and provides staff moderation tools through a shared core that runs on both Velocity (Minecraft) and Hytale. Uses a service-locator + adapter pattern so all login and moderation logic is shared across platforms.",
        tech: ["Java", "Velocity", "Hytale", "MySQL", "Discord"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/Landfall-Studios/Sentinel" }
        ]
    },
    {
        year: 2025,
        title: "Monarch",
        category: "Discord bot to manage and control game servers",
        filterCategory: "development",
        client: "Landfall Studios",
        icon: "hardware-chip-outline",
        description: "A Discord bot that bridges Discord and the Landfall Minecraft community: server management commands, info/FAQ resources, telemetry and system monitoring, and a role-based permission system for admins, moderators, and users. Also provides a just-in-time (JIT) access feature that lets administrators step into the Minecraft server environment on demand, with scoped permission management and full audit logs of every session.",
        tech: ["TypeScript", "Node.js", "Minecraft", "Discord"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/Landfall-Studios/Monarch" }
        ]
    },
    {
        year: 2025,
        title: "Statecraft",
        category: "Nation-Building & Diplomacy Simulation in Video Game Servers",
        filterCategory: "development",
        client: "Landfall Studios",
        icon: "globe-outline",
        favorite: true,
        featured: true,
        description: "Comprehensive API built in Rust for a Minecraft server, providing character lifecycle management, nation governance, emergent diplomacy, and a simulated player-driven economy. Statecraft enables complex nation-building and economic simulation within game servers. In addition to the ScAPI, a React frontend is deployed to facilitate interactions.",
        tech: ["Rust", "React", "Minecraft"],
        images: [
            { src: "images/statecraft1.png", alt: "Statecraft 1" },
            { src: "images/statecraft2.png", alt: "Statecraft 2" },
        ],
        links: [
            { icon: "document-text-outline", text: "API Docs", url: "https://api.statecraft.landfall.world/swagger-ui/" }
        ]
    },
    {
        year: 2025,
        title: "Verbatim",
        category: "Advanced Game Chat & Discord Integration Mod w/ Cross-Platform Compatibility",
        filterCategory: "development",
        client: "Landfall Studios",
        icon: "game-controller-outline",
        favorite: true,
        description: "A Java server-side mod designed to enhance in-game communication by providing configurable chat channels, direct messaging, Discord integration, and more. Built to offer a flexible and powerful chat system suitable for various server types, especially those with roleplaying or community focus.",
        tech: ["Java", "Hytale", "Fabric", "Paper", "NeoForge", "Discord"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/Landfall-SMP/Verbatim" }
        ]
    },
    {
        year: 2025,
        title: "Dotfiles",
        category: "Reproducible NixOS System Configurations for my Personal Systems",
        filterCategory: "infrastructure",
        icon: "settings-outline",
        description: "Personal NixOS setup with my entire system configuration as code. Fully reproducible, declarative system management ensuring consistent environments across machines.",
        tech: ["NixOS", "Nix", "Shell"],
        images: [
            { src: "https://raw.githubusercontent.com/confect1ondev/nixos/refs/heads/main/dotfiles.png", alt: "Lovergirl homepage" },
        ],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/nixos" }
        ]
    },
    {
        year: 2024,
        title: "Confessions of a Lovergirl",
        category: "Collaboration w/ Brand to Create a High-Traffic Promotional Site in 48 Hours",
        filterCategory: "development",
        client: "Rachel Bochner",
        icon: "musical-notes-outline",
        favorite: true,
        description: "Designed and launched a promotional website for a music release in just two days. Handled 3,000+ visits and 150+ concurrent users. Resolved critical post-launch issues within two minutes, ensuring uninterrupted access during peak traffic.",
        images: [
            { src: "images/confessionsofalovergirl.png", alt: "Lovergirl homepage" },
        ],
        stats: ["3000+ Visits", "150+ Concurrent", "2 Day Build"],
        tech: ["TypeScript", "React", "Node.js", "Nginx"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/Confessions-of-a-Lovergirl" }
        ]
    },
    {
        year: 2022,
        title: "Confectionery",
        category: "Lightweight Logging Library for Node.js, Available on NPM",
        filterCategory: "development",
        icon: "cube-outline",
        description: "Developed a configurable logging library with 4 levels and 3 format presets, outputting to stdout and user-provided directories. Achieved 450+ downloads on NPM with >70% test coverage ensuring quality.",
        stats: ["450+ Downloads", "70%+ Coverage"],
        tech: ["TypeScript", "Node.js", "Jest"],
        links: [
            { icon: "cube-outline", text: "NPM", url: "https://www.npmjs.com/package/confectionery" },
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/confectionery" }
        ]
    },
    {
        year: 2022,
        title: "Filing Saucer",
        category: "A file sharing server and API with a full web client",
        filterCategory: "development",
        icon: "cloud-upload-outline",
        description: "I developed this as a side project for myself. It is the third iteration of my personal file-sharing platform, now archived.",
        tech: ["TypeScript", "Node.js", "Express"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/Filing-Saucer" }
        ]
    }
];

// Function to generate project HTML
function generateProjectHTML(project) {
    const statsHTML = project.stats ? 
        `<div class="project-stats">
            ${project.stats.map(stat => `<span>${stat}</span>`).join('\n            ')}
        </div>` : '';

    const linksHTML = project.links ? 
        `<div class="project-links">
            ${project.links.map(link => 
                `<a href="${link.url}" target="_blank">
                <ion-icon name="${link.icon}"></ion-icon> ${link.text}
            </a>`).join('\n            ')}
        </div>` : '';

    const imagesHTML = project.images ? 
        `<div class="project-images">
            ${project.images.map(img => 
                `<div class="project-image-container">
                    <img src="${img.src}" alt="${img.alt || project.title}" loading="lazy">
                </div>`).join('\n            ')}
        </div>` : '';

    const favoriteIcon = '';

    const previewHTML = project.featured && project.images && project.images.length > 0 ?
        `<div class="project-preview">
            <img src="${project.images[0].src}" alt="${project.images[0].alt || project.title}" loading="lazy">
        </div>` : '';

    const clientHTML = project.client ?
        `<span class="project-client">${project.client}</span>` : '';

    return `
        <li class="project-item active${project.featured ? ' featured' : ''}" data-filter-item data-category="${project.filterCategory}" data-year="${project.year}" data-client="${project.client || ''}" data-project-item>
            <div class="project-card${project.favorite ? ' favorite' : ''}${project.featured ? ' featured' : ''}">
                ${previewHTML}
                <div class="project-header">
                    ${favoriteIcon}
                    <div class="project-year">${project.year}</div>
                    <div class="project-title-row">
                        <span class="project-icon">
                            <ion-icon name="${project.icon}"></ion-icon>
                        </span>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                    <p class="project-category">${project.category}</p>
                    ${clientHTML}
                </div>
                <div class="project-details">
                    <p class="project-description">${project.description}</p>
                    ${imagesHTML}
                    ${statsHTML}
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span>${tech}</span>`).join('\n                        ')}
                    </div>
                    ${linksHTML}
                </div>
            </div>
        </li>`;
}

// Render a research project as a compact contribution-style row (icon box + title/date + one-line text + link).
function generateResearchHTML(project) {
    const primaryLink = (project.links && project.links[0]) || null;
    const titleEl = primaryLink
        ? `<a class="research-title" href="${primaryLink.url}" target="_blank" rel="noopener">${project.title}</a>`
        : `<span class="research-title">${project.title}</span>`;
    const linkBtn = primaryLink
        ? `<a class="research-link" aria-label="Open ${project.title}" title="${primaryLink.text || 'Open'}" href="${primaryLink.url}" target="_blank" rel="noopener"><ion-icon name="open-outline"></ion-icon></a>`
        : '';

    return `
        <li class="research-item" data-research-item>
            <div class="research-icon">
                <ion-icon name="${project.icon}"></ion-icon>
            </div>
            <div class="research-body">
                <div class="research-header">
                    ${titleEl}
                    <time class="research-date">${project.year}</time>
                </div>
                <p class="research-text">${project.description}</p>
                ${linkBtn}
            </div>
        </li>`;
}

// Module-level cache so resize handler can re-render without re-sorting.
let _mainProjects = null;
let _researchProjects = null;
let _lastMainCols = null;

function getColumnCount() {
    if (window.matchMedia('(min-width: 1024px)').matches) return 3;
    if (window.matchMedia('(min-width: 580px)').matches) return 2;
    return 1;
}

// Distribute projects into N flex columns. Round-robin keeps the sort order roughly preserved
// within each column AND spreads featured cards (which come first in the sort) across columns
// rather than piling them all into column 1.
function renderColumns(listEl, projects) {
    const cols = getColumnCount();
    listEl.innerHTML = '';
    const colEls = [];
    for (let i = 0; i < cols; i++) {
        const col = document.createElement('div');
        col.className = 'project-column';
        listEl.appendChild(col);
        colEls.push(col);
    }
    projects.forEach((project, idx) => {
        const target = colEls[idx % cols];
        target.insertAdjacentHTML('beforeend', generateProjectHTML(project));
    });
    return cols;
}

// Initialize portfolio when DOM is ready
function initializePortfolio() {
    const projectList = document.querySelector('.project-list:not(.research-list)');
    const researchList = document.querySelector('.research-list');

    const sortFn = (a, b) => {
        const aTier = a.featured ? 0 : a.favorite ? 1 : 2;
        const bTier = b.featured ? 0 : b.favorite ? 1 : 2;
        if (aTier !== bTier) return aTier - bTier;
        // Within a tier, cluster by client (projects with no client sort last)
        const aClient = a.client || '\uffff';
        const bClient = b.client || '\uffff';
        if (aClient !== bClient) return aClient.localeCompare(bClient);
        return b.year - a.year;
    };

    _mainProjects = portfolioProjects.filter(p => p.filterCategory !== 'research').sort(sortFn);
    _researchProjects = portfolioProjects.filter(p => p.filterCategory === 'research').sort(sortFn);

    if (projectList) _lastMainCols = renderColumns(projectList, _mainProjects);
    if (researchList) {
        researchList.innerHTML = '';
        _researchProjects.forEach(project => {
            researchList.insertAdjacentHTML('beforeend', generateResearchHTML(project));
        });
        researchList.querySelectorAll('.research-item').forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target.closest('a')) return;
                this.classList.toggle('expanded');
            });
        });
        const researchSection = researchList.closest('.research');
        if (researchSection) {
            researchSection.style.display = _researchProjects.length ? '' : 'none';
        }
    }

    initializeProjectCardListeners();
    updateFilterButtons();
    initializeFilters();

    // Re-distribute only when the responsive column count changes.
    if (!window._portfolioResizeBound) {
        window._portfolioResizeBound = true;
        let raf = null;
        window.addEventListener('resize', () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const main = document.querySelector('.project-list:not(.research-list)');
                if (main && _mainProjects) {
                    const newCols = getColumnCount();
                    if (newCols !== _lastMainCols) {
                        _lastMainCols = renderColumns(main, _mainProjects);
                        initializeProjectCardListeners();
                        applyFilters();
                    }
                }
            });
        });
    }
}

// Populate filter dropdowns (year + client) from project data
function updateFilterButtons() {
    const mainProjects = portfolioProjects.filter(p => p.filterCategory !== 'research');

    const years = [...new Set(mainProjects.map(p => p.year))].sort((a, b) => b - a);
    const yearOptions = ['All Years', ...years.map(String)];
    const yearList = document.querySelector('[data-select-list="year"]');
    if (yearList) {
        yearList.innerHTML = yearOptions.map(option =>
            `<li class="select-item"><button data-year-select-item>${option}</button></li>`
        ).join('');
    }

    const clients = [...new Set(mainProjects.map(p => p.client).filter(Boolean))].sort();
    const clientOptions = ['All Clients', ...clients];
    const clientList = document.querySelector('[data-select-list="client"]');
    if (clientList) {
        clientList.innerHTML = clientOptions.map(option =>
            `<li class="select-item"><button data-client-select-item>${option}</button></li>`
        ).join('');
    }
}

// Filter state persists across resize re-renders so we can re-apply after the DOM is rebuilt.
const _filterState = { year: 'all', client: 'all' };

function applyFilters() {
    const items = document.querySelectorAll('.project-list:not(.research-list) [data-filter-item]');
    items.forEach(item => {
        const year = item.dataset.year;
        const client = item.dataset.client || '';

        const yearMatch = _filterState.year === 'all' || _filterState.year === year;
        const clientMatch = _filterState.client === 'all' || _filterState.client === client;

        if (yearMatch && clientMatch) item.classList.add('active');
        else item.classList.remove('active');
    });
}

// Initialize filter functionality for portfolio
function initializeFilters() {

    const setupSelect = (selectEl, itemSelector, onPick) => {
        if (!selectEl) return;
        // Clone button to clear any prior listeners. Items are siblings inside .filter-select-box and were
        // just rewritten by updateFilterButtons via innerHTML, so they have no stale listeners.
        const fresh = selectEl.cloneNode(true);
        selectEl.parentNode.replaceChild(fresh, selectEl);
        fresh.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });
        const container = fresh.parentNode;
        container.querySelectorAll(itemSelector).forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                onPick(this.innerText);
                fresh.classList.remove('active');
            });
        });
    };

    setupSelect(
        document.querySelector('[data-select="year"]'),
        '[data-year-select-item]',
        (text) => {
            _filterState.year = text === 'All Years' ? 'all' : text;
            const label = document.querySelector('[data-select-value="year"]');
            if (label) label.innerText = text;
            applyFilters();
        }
    );

    setupSelect(
        document.querySelector('[data-select="client"]'),
        '[data-client-select-item]',
        (text) => {
            _filterState.client = text === 'All Clients' ? 'all' : text;
            const label = document.querySelector('[data-select-value="client"]');
            if (label) label.innerText = text;
            applyFilters();
        }
    );
}

// Re-initialize project card click listeners
function initializeProjectCardListeners() {
    const projectItems = document.querySelectorAll('[data-project-item]');
    
    projectItems.forEach(item => {
        const card = item.querySelector('.project-card');
        const details = item.querySelector('.project-details');
        
        if (card && details) {
            details.style.display = '';
            
            card.addEventListener('click', function(e) {
                // Don't close card when clicking links or images
                if (e.target.closest('.project-links') || e.target.closest('.project-image-container')) {
                    return;
                }
                
                projectItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherCard = otherItem.querySelector('.project-card');
                        const otherDetails = otherItem.querySelector('.project-details');
                        if (otherCard && otherDetails) {
                            otherCard.classList.remove('expanded');
                            otherDetails.classList.remove('show');
                            otherItem.classList.remove('expanded');
                        }
                    }
                });
                
                const isExpanding = !card.classList.contains('expanded');
                card.classList.toggle('expanded');
                details.classList.toggle('show');
                item.classList.toggle('expanded');
                
                if (isExpanding) {
                    setTimeout(() => {
                        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 200);
                }
            });
        }
    });
    
    // Initialize image lightbox
    initializeImageLightbox();
}

// Initialize image lightbox functionality
function initializeImageLightbox() {
    // Create modal if it doesn't exist
    if (!document.querySelector('.image-modal')) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="image-modal-close">&times;</span>
            <img src="" alt="">
        `;
        document.body.appendChild(modal);
        
        // Close modal when clicking outside image or on close button
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.className === 'image-modal-close') {
                modal.classList.remove('active');
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Add click listeners to project images
    document.querySelectorAll('.project-image-container').forEach(container => {
        container.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card from closing
            const img = container.querySelector('img');
            const modal = document.querySelector('.image-modal');
            const modalImg = modal.querySelector('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
        });
    });
}

// Initialize portfolio on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}