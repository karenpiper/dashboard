// Dashboard Interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeInteractions();
});

function initializeInteractions() {
    // Initialize dropdown
    initializeDropdown();

    // Initialize search
    initializeSearch();

    // Initialize hover effects
    initializeHoverEffects();

    // Initialize navigation
    initializeNavigation();
}

// Dropdown Menu Interaction
function initializeDropdown() {
    const profileAvatar = document.querySelector('.profile-avatar');
    if (profileAvatar) {
        profileAvatar.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => {
            menu.style.display = 'none';
        });
    });
}

// Search Autocomplete Interaction
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const value = e.target.value.toLowerCase();
            const suggestions = document.querySelectorAll('.autocomplete-suggestions .suggestion');

            suggestions.forEach(suggestion => {
                const text = suggestion.textContent.toLowerCase();
                suggestion.style.display = text.includes(value) ? 'block' : 'none';
            });
        });

        // Clear on focus
        searchInput.addEventListener('focus', function() {
            this.value = '';
        });
    }
}

// Hover Effects for Cards
function initializeHoverEffects() {
    const tiles = document.querySelectorAll('.tile, .snap-card, .category-card');
    tiles.forEach(tile => {
        tile.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
}

// Navigation Active State
function initializeNavigation() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        // Remove active class from all
        item.classList.remove('active');

        // Add active class to current page
        if (item.getAttribute('href') === currentPath ||
            item.getAttribute('href') === currentPath.split('/').pop() ||
            (currentPath.endsWith('/') && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });
}

// Button Interactions
function initializeButtons() {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});

// Filter Interaction
function initializeFilters() {
    const filterItems = document.querySelectorAll('.filter-item input[type="checkbox"]');
    filterItems.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFilters();
        });
    });
}

function applyFilters() {
    const selectedFilters = [];
    const checkboxes = document.querySelectorAll('.filter-item input[type="checkbox"]:checked');
    checkboxes.forEach(cb => {
        selectedFilters.push(cb.value);
    });

    // Filter cards based on selected filters
    const feedCards = document.querySelectorAll('.feed-card');
    feedCards.forEach(card => {
        let show = true;
        if (selectedFilters.length > 0) {
            show = selectedFilters.some(filter =>
                card.getAttribute('data-category') === filter
            );
        }
        card.style.display = show ? 'block' : 'none';
    });
}

// Tab Navigation
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Draggable Elements for Pipeline
function initializeDragAndDrop() {
    const draggableCards = document.querySelectorAll('.pipeline-card');
    const dropZones = document.querySelectorAll('.pipeline-column');

    draggableCards.forEach(card => {
        card.draggable = true;

        card.addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '#e0e7ff';
        });

        zone.addEventListener('dragleave', function() {
            this.style.backgroundColor = '#f8f9fa';
        });

        zone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.backgroundColor = '#f8f9fa';
        });
    });
}

// Form Submission Handler
function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            console.log('Form submitted:', new FormData(this));
            // Show success message or handle as needed
        });
    }
}

// Animate on Scroll
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease-in-out';
            }
        });
    });

    const elements = document.querySelectorAll('.tile, .feed-card');
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize all interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeButtons();
    initializeFilters();
    initializeDragAndDrop();
    initializeScrollAnimations();
});
