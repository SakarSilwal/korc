document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Bar Controls ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Dynamic Scroll States & Active Trackers ---
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section, header');

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                // Keep background color locked on the dedicated archive page sub-view
                if (!document.querySelector('.archive-section')) {
                    navbar.classList.remove('scrolled');
                }
            }
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.classList.remove('active');
                if (href === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            }
        });
    });

    // --- Scroll-Driven Reveal Animations Engine ---
    const revealItems = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.12, 
        rootMargin: "0px 0px -20px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

    // --- Responsive Gallery Lightbox Window ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgEl = item.querySelector('img');
            if (!imgEl) return;
            
            const imgSrc = imgEl.getAttribute('src');
            const imgAlt = imgEl.getAttribute('alt');
            
            if (lightboxImg && lightbox) {
                lightboxImg.setAttribute('src', imgSrc);
                lightboxImg.setAttribute('alt', imgAlt);
                lightbox.style.display = 'block';
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    const closeLightbox = () => {
        if (lightbox) {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto'; 
        }
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    // --- Archive Folder Filtering Engine (Dedicated Subpage Logic) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const archiveItems = document.querySelectorAll('.archive-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedFolder = button.getAttribute('data-folder');

            archiveItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (selectedFolder === 'all' || selectedFolder === itemCategory) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });
});