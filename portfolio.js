const portfolioProjects = [
    {
        year: 2025,
        title: "Declaring Security: How Declarative Operating Systems Reduce Drift",
        category: "A Case Study in NixOS with Implications for Enterprise Fleets",
        filterCategory: "research",
        icon: "document-text-outline",
        description: "A research paper proposing the adoption of declarativity as a security primitive, using NixOS as a case study.",
        stats: ["21 Pages", "Research Paper"],
        tech: ["Security", "Infrastructure", "DevSecOps"],
        favorite: true,
        links: [
            { icon: "document-outline", text: "PDF File", url: "https://drive.google.com/file/d/1mIOKwf1Eq7OlYQUR3-Fqu655tixUryjU/view" }
        ]
    },
    {
        year: 2025,
        title: "Statecraft",
        category: "Nation-Building & Diplomacy Simulation in Video Game Servers",
        filterCategory: "development",
        icon: "globe-outline",
        description: "Comprehensive API built in Rust for a Minecraft server, providing character lifecycle management, nation governance, emergent diplomacy, and a simulated player-driven economy. Statecraft enables complex nation-building and economic simulation within game servers. In addition to the ScAPI, a React frontend is deployed to facilitate interactions.",
        tech: ["Rust", "REST API", "Swagger", "Game Economy"],
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
        category: "Advanced Chat & Discord Integration for NeoForge",
        filterCategory: "development",
        icon: "game-controller-outline",
        description: "A Minecraft NeoForge server-side mod designed to enhance in-game communication by providing configurable chat channels, direct messaging, Discord integration, and more. Built to offer a flexible and powerful chat system suitable for various server types, especially those with roleplaying or community focus.",
        tech: ["Java", "Forge", "NeoForge", "Discord API"],
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
        tech: ["NixOS", "Nix", "Shell", "Infrastructure as Code"],
        favorite: true,
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
        icon: "musical-notes-outline",
        favorite: true,
        description: "Designed and launched a promotional website for a music release in just two days. Handled 3,000+ visits and 150+ concurrent users. Resolved critical post-launch issues within two minutes, ensuring uninterrupted access during peak traffic.",
        images: [
            { src: "images/confessionsofalovergirl.png", alt: "Lovergirl homepage" },
        ],
        stats: ["3000+ Visits", "150+ Concurrent", "2 Day Build"],
        tech: ["TypeScript", "React", "Node.js", "Nginx"],
        links: [
            { icon: "logo-github", text: "GitHub", url: "https://github.com/confect1ondev/LovergirlConfessions" }
        ]
    },
    {
        year: 2022,
        title: "Confectionery",
        category: "Lightweight Logging Library for Node.js, Available on NPM",
        filterCategory: "development",
        icon: "cube-outline",
        description: "Developed a configurable logging library with 4 levels and 3 format presets, outputting to stdout and user-provided directories. Achieved 450+ downloads on NPM with >70% test coverage ensuring quality.",
        stats: ["450+ Downloads", "70%+ Coverage", "4 Log Levels"],
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
        icon: "cube-outline",
        description: "I developed this as a side project for myself. It is the third iteration of my personal file-sharing platform, now archived.",
        stats: ["150+ Commits"],
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

    return `
        <li class="project-item active" data-filter-item data-category="${project.filterCategory}" data-project-item>
            <div class="project-card${project.favorite ? ' favorite' : ''}">
                <div class="project-header">
                    ${favoriteIcon}
                    <div class="project-year">${project.year}</div>
                    <div class="project-icon">
                        <ion-icon name="${project.icon}"></ion-icon>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-category">${project.category}</p>
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

// Initialize portfolio when DOM is ready
function initializePortfolio() {
    const projectList = document.querySelector('.project-list');
    if (projectList) {
        // Clear existing static HTML projects
        const existingProjects = projectList.querySelectorAll('.project-item');
        existingProjects.forEach(item => item.remove());
        
        // Sort projects: favorites first, then by year
        const sortedProjects = [...portfolioProjects].sort((a, b) => {
            // Favorites come first
            if (a.favorite && !b.favorite) return -1;
            if (!a.favorite && b.favorite) return 1;
            // Then sort by year (newest first)
            return b.year - a.year;
        });
        
        // Add projects from data
        sortedProjects.forEach(project => {
            projectList.insertAdjacentHTML('beforeend', generateProjectHTML(project));
        });
        
        // Re-initialize event listeners for the new elements
        initializeProjectCardListeners();
        
        // Update filter buttons with available categories
        updateFilterButtons();
        
        // Re-initialize filter functionality
        initializeFilters();
    }
}

// Update filter buttons based on available categories
function updateFilterButtons() {
    // Check if there are any favorites
    const hasFavorites = portfolioProjects.some(p => p.favorite);
    
    // Get unique categories from portfolio projects and sort them
    const categories = [...new Set(portfolioProjects.map(p => p.filterCategory))].sort();
    
    // Build filter options
    let filterOptions = ['All'];
    if (hasFavorites) {
        filterOptions.push('Favorites');
    }
    filterOptions = filterOptions.concat(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)));
    
    // Update filter list (buttons)
    const filterList = document.querySelector('.filter-list');
    if (filterList) {
        filterList.innerHTML = filterOptions.map((option, index) => 
            `<li class="filter-item"><button ${index === 0 ? 'class="active"' : ''} data-filter-btn>${option}</button></li>`
        ).join('');
    }
    
    // Update select dropdown
    const selectList = document.querySelector('.select-list');
    if (selectList) {
        selectList.innerHTML = filterOptions.map(option => 
            `<li class="select-item"><button data-select-item>${option}</button></li>`
        ).join('');
    }
}

// Initialize filter functionality for portfolio
function initializeFilters() {
    const select = document.querySelector('[data-select]');
    const selectItems = document.querySelectorAll('[data-select-item]');
    const selectValue = document.querySelector('[data-select-value]');
    const filterBtn = document.querySelectorAll('[data-filter-btn]');
    const filterItems = document.querySelectorAll('[data-filter-item]');
    
    const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
    
    const filterFunc = function (selectedValue) {
        for(let i = 0; i < filterItems.length; i++) {
            const item = filterItems[i];
            const projectCard = item.querySelector('.project-card');
            const isFavorite = projectCard && projectCard.classList.contains('favorite');
            
            if(selectedValue == "all") {
                item.classList.add('active');
            } else if (selectedValue == "favorites" && isFavorite) {
                item.classList.add('active');
            } else if (selectedValue == item.dataset.category) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    }
    
    // Re-attach event listeners for select dropdown
    if (select) {
        // Remove old listener by cloning
        const newSelect = select.cloneNode(true);
        select.parentNode.replaceChild(newSelect, select);
        
        newSelect.addEventListener('click', function () { elementToggleFunc(this); });
    }
    
    // Re-attach for select items
    selectItems.forEach((item, i) => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function() {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(document.querySelector('[data-select]'));
            filterFunc(selectedValue);
        });
    });
    
    // Re-attach for filter buttons
    let lastClickedBtn = filterBtn.length > 0 ? filterBtn[0] : null;
    
    filterBtn.forEach((btn, i) => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', function() {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            filterFunc(selectedValue);
            
            // Update active state
            document.querySelectorAll('[data-filter-btn]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
        
        if (i === 0) lastClickedBtn = newBtn;
    });
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