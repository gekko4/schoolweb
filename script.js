document.addEventListener('DOMContentLoaded', () => {
    
    // Select sections to monitor
    const trackedSections = document.querySelectorAll('.spy');
    
    // Select nav links
    const navLinks = document.querySelectorAll('.link');

    // Observer options
    const observerOptions = {
        root: null, 
        rootMargin: '-20% 0px -70% 0px', 
        threshold: 0
    };

    // Handle active states for navigation
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                // Remove active class
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to intersecting link
                const activeLink = document.querySelector(`.link[href="#${entry.target.id}"]`);
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Attach observer
    trackedSections.forEach(section => {
        scrollObserver.observe(section);
    });
});