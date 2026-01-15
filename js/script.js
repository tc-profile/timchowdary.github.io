// Professional Portfolio JavaScript

// Dynamic Section Switching
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');
    const dynamicSections = document.querySelectorAll('.dynamic-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    
    // Function to show a specific section
    function showSection(sectionId) {
        // If clicking Welcome or About, show About section and hide dynamic sections
        if (sectionId === 'welcome' || sectionId === 'about') {
            aboutSection.style.display = 'block';
            dynamicSections.forEach(section => {
                section.style.display = 'none';
            });
        } else {
            // Hide About section and all dynamic sections first
            aboutSection.style.display = 'none';
            dynamicSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected dynamic section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        }
    }
    
    // Add click handlers to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Remove the # from href
            showSection(targetId);
            
            // Update active state
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Smooth scroll to top of content
            document.getElementById(targetId === 'welcome' ? 'welcome' : targetId === 'about' ? 'about' : targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Initialize default view - Welcome section
    showSection('welcome');
    
    // Set Welcome link as active on page load
    const welcomeLink = document.querySelector('.sidebar-menu a[href="#welcome"]');
    if (welcomeLink) {
        sidebarLinks.forEach(link => link.classList.remove('active'));
        welcomeLink.classList.add('active');
    }
    
    // Scroll to Welcome section on page load
    setTimeout(() => {
        const welcomeSection = document.getElementById('welcome');
        if (welcomeSection) {
            welcomeSection.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });
        }
    }, 100);
});

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

// Smooth scroll for navigation links (handled by dynamic section switching above)
// Keeping this for any other internal links that may be added
document.querySelectorAll('a[href^="#"]:not(.sidebar-menu a)').forEach(anchor => {
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

// Add active class to sidebar links on scroll (only for visible sections)
window.addEventListener('scroll', () => {
    let current = 'welcome'; // Default to welcome section
    const sections = document.querySelectorAll('.hero, .section');
    
    sections.forEach(section => {
        // Only consider visible sections
        if (section.style.display !== 'none') {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
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
    
    // Thought Leadership topic switching
    const tlNavBtns = document.querySelectorAll('.tl-nav-btn');
    const tlTopicContents = document.querySelectorAll('.tl-topic-content');
    
    tlNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            
            // Remove active class from all buttons
            tlNavBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all topic contents
            tlTopicContents.forEach(content => content.classList.remove('active'));
            
            // Show selected topic content
            const targetContent = document.getElementById(`${topic}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Initialize PDF viewer if Frameworks topic is selected
                if (topic === 'frameworks') {
                    initPDFViewer();
                }
            }
        });
    });
    
    // PDF Viewer functionality
    let pdfDoc = null;
    let pageNum = 1;
    let pageIsRendering = false;
    let pageNumIsPending = null;
    
    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumElem = document.getElementById('page-num');
    const pageCountElem = document.getElementById('page-count');
    const pdfLoading = document.getElementById('pdf-loading');
    
    function initPDFViewer() {
        if (!pdfDoc && typeof pdfjsLib !== 'undefined' && canvas) {
            // Set worker source
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            
            // Load PDF
            const pdfPath = 'Thought Leadership/Mental_Models_vs_Frameworks.pdf';
            
            pdfjsLib.getDocument(pdfPath).promise.then((pdfDoc_) => {
                pdfDoc = pdfDoc_;
                pageCountElem.textContent = pdfDoc.numPages;
                
                // Hide loading indicator
                if (pdfLoading) {
                    pdfLoading.classList.add('hidden');
                }
                
                // Render first page
                renderPage(pageNum);
                
                // Setup navigation buttons
                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        if (pageNum <= 1) return;
                        pageNum--;
                        queueRenderPage(pageNum);
                    });
                }
                
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        if (pageNum >= pdfDoc.numPages) return;
                        pageNum++;
                        queueRenderPage(pageNum);
                    });
                }
            }).catch(err => {
                console.error('Error loading PDF:', err);
                if (pdfLoading) {
                    pdfLoading.innerHTML = '<p style="color: red;">Error loading PDF. Please try again later.</p>';
                }
            });
        } else if (pdfDoc) {
            // PDF already loaded, just render current page
            renderPage(pageNum);
        }
    }
    
    function renderPage(num) {
        if (!pdfDoc || !canvas || !ctx) return;
        
        pageIsRendering = true;
        
        // Get page
        pdfDoc.getPage(num).then((page) => {
            // Set scale for better quality
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });
            
            // Set canvas dimensions
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            // Render PDF page
            const renderCtx = {
                canvasContext: ctx,
                viewport: viewport
            };
            
            const renderTask = page.render(renderCtx);
            
            renderTask.promise.then(() => {
                pageIsRendering = false;
                
                if (pageNumIsPending !== null) {
                    renderPage(pageNumIsPending);
                    pageNumIsPending = null;
                }
            });
        });
        
        // Update page number
        if (pageNumElem) {
            pageNumElem.textContent = num;
        }
        
        // Update button states
        if (prevBtn) {
            prevBtn.disabled = (num <= 1);
        }
        if (nextBtn) {
            nextBtn.disabled = (num >= pdfDoc.numPages);
        }
    }
    
    function queueRenderPage(num) {
        if (pageIsRendering) {
            pageNumIsPending = num;
        } else {
            renderPage(num);
        }
    }
    
    // About Me topic switching
    const aboutNavBtns = document.querySelectorAll('.about-nav-btn');
    const aboutTopicContents = document.querySelectorAll('.about-topic-content');
    
    aboutNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            
            // Remove active class from all buttons
            aboutNavBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all topic contents
            aboutTopicContents.forEach(content => content.classList.remove('active'));
            
            // Show selected topic content
            const targetContent = document.getElementById(`${topic}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Projects switching
    const projectNavBtns = document.querySelectorAll('.project-nav-btn');
    const projectContents = document.querySelectorAll('.project-content');
    
    projectNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            
            // Remove active class from all buttons
            projectNavBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all project contents
            projectContents.forEach(content => content.classList.remove('active'));
            
            // Show selected project content
            const targetContent = document.getElementById(`${project}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Console message for visitors
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in how this site was built? Check out the source code!', 'font-size: 14px; color: #6b7280;');

