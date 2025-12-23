// Professional Portfolio JavaScript

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuToggle && sidebar) {
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking on a link (mobile)
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}

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

// Add active class to sidebar links on scroll
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

    document.querySelectorAll('.sidebar-menu a').forEach(link => {
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

// Initialize all DOM-dependent functionality
document.addEventListener('DOMContentLoaded', () => {
    // Observe all project cards for animation
    const cards = document.querySelectorAll('.project-card, .skill-category');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Email button functionality
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
    
    // Mobile button functionality
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileDisplay = document.getElementById('mobileDisplay');
    
    if (mobileBtn && mobileDisplay) {
        mobileBtn.addEventListener('click', function() {
            if (mobileDisplay.style.display === 'none' || mobileDisplay.style.display === '') {
                mobileDisplay.style.display = 'block';
                mobileBtn.innerHTML = '<span>📱</span> Hide Mobile';
            } else {
                mobileDisplay.style.display = 'none';
                mobileBtn.innerHTML = '<span>📱</span> Mobile';
            }
        });
    }
    
    // Hero Email button functionality
    const emailBtnHero = document.getElementById('emailBtnHero');
    const emailDisplayHero = document.getElementById('emailDisplayHero');
    
    if (emailBtnHero && emailDisplayHero) {
        emailBtnHero.addEventListener('click', function() {
            if (emailDisplayHero.style.display === 'none' || emailDisplayHero.style.display === '') {
                emailDisplayHero.style.display = 'block';
                emailBtnHero.innerHTML = '<span>📧</span> Hide Email';
            } else {
                emailDisplayHero.style.display = 'none';
                emailBtnHero.innerHTML = '<span>📧</span> Email';
            }
        });
    }
    
    // Hero Mobile button functionality
    const mobileBtnHero = document.getElementById('mobileBtnHero');
    const mobileDisplayHero = document.getElementById('mobileDisplayHero');
    
    if (mobileBtnHero && mobileDisplayHero) {
        mobileBtnHero.addEventListener('click', function() {
            if (mobileDisplayHero.style.display === 'none' || mobileDisplayHero.style.display === '') {
                mobileDisplayHero.style.display = 'block';
                mobileBtnHero.innerHTML = '<span>📱</span> Hide Mobile';
            } else {
                mobileDisplayHero.style.display = 'none';
                mobileBtnHero.innerHTML = '<span>📱</span> Mobile';
            }
        });
    }
});

// Console message for visitors
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in how this site was built? Check out the source code!', 'font-size: 14px; color: #6b7280;');

