document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // Initialize search functionality
    initSearch();
    
    // Check if we're on a post page
    if (isPostPage()) {
        loadSinglePost();
    } else if (document.getElementById('blog-grid')) {
        loadBlogPosts();
    }
});

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', async function() {
        const query = this.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        try {
            const response = await fetch('blog_data.json');
            const posts = await response.json();
            
            const results = posts.filter(post => 
                post.title.toLowerCase().includes(query) || 
                post.excerpt.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query)
            ).slice(0, 5);
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(post => {
                    const postDate = new Date(post.date);
                    const slug = createSlug(post.title);
                    const url = `/${postDate.getFullYear()}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${String(postDate.getDate()).padStart(2, '0')}/${slug}.html`;
                    
                    return `<a href="${url}">${post.title} <small>(${postDate.toLocaleDateString()})</small></a>`;
                }).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div class="no-results">No articles found</div>';
                searchResults.style.display = 'block';
            }
        } catch (error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="no-results">Error loading search results</div>';
            searchResults.style.display = 'block';
        }
    });
    
    // Hide results when clicking elsewhere
    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
}

function isPostPage() {
    return window.location.pathname.includes('404.html') || 
           /\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)\.html$/.test(window.location.pathname);
}

function createSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 50)
        .replace(/-$/, '');
}

async function loadBlogPosts() {
    try {
        const response = await fetch('blog_data.json');
        const allPosts = await response.json();
        
        // Sort by date (newest first)
        allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Pagination - 6 posts per page
        const postsPerPage = 6;
        const currentPage = getPageNumber();
        const totalPages = Math.ceil(allPosts.length / postsPerPage);
        const paginatedPosts = allPosts.slice(
            (currentPage - 1) * postsPerPage,
            currentPage * postsPerPage
        );
        
        // Display posts
        const grid = document.getElementById('blog-grid');
        if (grid) {
            grid.innerHTML = paginatedPosts.map(post => {
                const postDate = new Date(post.date);
                const year = postDate.getFullYear();
                const month = String(postDate.getMonth() + 1).padStart(2, '0');
                const day = String(postDate.getDate()).padStart(2, '0');
                const slug = createSlug(post.title);
                const postUrl = `/${year}/${month}/${day}/${slug}.html`;
                
                return `
                    <article class="blog-card">
                        <div class="card-image">
                            <a href="${postUrl}">
                                <img src="${post.image}" alt="${post.title}">
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="post-meta">
                                <span>By ${post.author}</span>
                                <span>•</span>
                                <span>${postDate.toLocaleDateString()}</span>
                            </div>
                            <h2><a href="${postUrl}">${post.title}</a></h2>
                            <p>${post.excerpt}</p>
                            <a href="${postUrl}" class="read-more">Read More →</a>
                        </div>
                    </article>
                `;
            }).join('');
        }
        
        // Display pagination
        const pagination = document.getElementById('pagination');
        if (pagination && totalPages > 1) {
            let paginationHTML = '';
            
            if (currentPage > 1) {
                paginationHTML += `<a href="index.html?page=${currentPage - 1}">← Previous</a>`;
            }
            
            const startPage = Math.max(1, currentPage - 1);
            const endPage = Math.min(totalPages, currentPage + 1);
            
            for (let i = startPage; i <= endPage; i++) {
                paginationHTML += `<a href="index.html?page=${i}" ${i === currentPage ? 'class="active"' : ''}>${i}</a>`;
            }
            
            if (currentPage < totalPages) {
                paginationHTML += `<a href="index.html?page=${currentPage + 1}">Next →</a>`;
            }
            
            pagination.innerHTML = paginationHTML;
        }
    } catch (error) {
        console.error('Error loading posts:', error);
        document.getElementById('blog-grid').innerHTML = `
            <div class="error-message">
                <p>Failed to load blog posts. Please try again later.</p>
            </div>
        `;
    }
}

async function loadSinglePost() {
    try {
        let year, month, day, slug;
        
        const pathMatch = window.location.pathname.match(/\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)\.html$/);
        
        if (pathMatch) {
            [year, month, day, slug] = pathMatch.slice(1);
        } else if (window.location.hash) {
            [year, month, day, slug] = window.location.hash.substring(1).split('/');
        } else {
            throw new Error('Invalid post URL');
        }
        
        const response = await fetch('blog_data.json');
        const posts = await response.json();
        
        const post = posts.find(p => {
            const postSlug = createSlug(p.title);
            const postDate = new Date(p.date);
            return postSlug === slug &&
                   postDate.getFullYear() == year &&
                   String(postDate.getMonth() + 1).padStart(2, '0') == month &&
                   String(postDate.getDate()).padStart(2, '0') == day;
        });
        
        if (post) {
            // Update SEO meta tags
            document.getElementById('post-title').textContent = `${post.title} | My Laundry Blog`;
            document.getElementById('meta-description').content = post.excerpt;
            document.getElementById('meta-keywords').content = `laundry, ${post.title.toLowerCase().split(' ').join(', ')}, ${post.author}`;
            
            // Update Open Graph tags
            document.getElementById('og-url').content = window.location.href;
            document.getElementById('og-title').content = post.title;
            document.getElementById('og-description').content = post.excerpt;
            document.getElementById('og-image').content = post.image;
            
            // Display post content
            document.getElementById('post-content').innerHTML = `
                <h1>${post.title}</h1>
                <div class="post-meta">
                    <span>By ${post.author}</span>
                    <span>•</span>
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div class="featured-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-body">
                    ${post.description}
                </div>
                <a href="index.html" class="back-link">← Back to Blog</a>
            `;
        } else {
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error loading post:', error);
        document.getElementById('post-content').innerHTML = `
            <div class="error-message">
                <p>Post not found. <a href="index.html">Return to blog</a></p>
            </div>
        `;
    }
}

function getPageNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    return Math.max(1, page);
}
