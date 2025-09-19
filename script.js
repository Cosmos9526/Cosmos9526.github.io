document.addEventListener('DOMContentLoaded', function() {
    // Services dropdown
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesContent = document.querySelector('.services-dropdown .dropdown-content');
    
    if (servicesDropdown && servicesContent) {
        servicesDropdown.addEventListener('mouseenter', function() {
            servicesContent.classList.add('show');
        });
        
        servicesDropdown.addEventListener('mouseleave', function() {
            servicesContent.classList.remove('show');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active nav link highlighting
    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-item a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setActiveNav();

    // Simple animations
    document.querySelectorAll('.skill-card, .project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});