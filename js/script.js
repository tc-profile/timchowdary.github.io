// Professional Portfolio JavaScript

// Smooth scroll for navigation links
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

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .skill-category');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Email display functionality
document.addEventListener('DOMContentLoaded', () => {
    const emailBtn = document.getElementById('emailBtn');
    const emailDisplay = document.getElementById('emailDisplay');
    
    if (emailBtn && emailDisplay) {
        emailBtn.addEventListener('click', function() {
            if (emailDisplay.style.display === 'none' || emailDisplay.style.display === '') {
                emailDisplay.style.display = 'block';
                emailBtn.innerHTML = '<span>📧</span> Hide Email';
            } else {
                emailDisplay.style.display = 'none';
                emailBtn.innerHTML = '<span>📧</span> Email';
            }
        });
    }
});

// Console message for visitors
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in how this site was built? Check out the source code!', 'font-size: 14px; color: #6b7280;');

