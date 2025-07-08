        // Smooth scrolling for navigation links
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
    
            // Navigation bar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
    
            // Form submission with better feedback
            document.querySelector('.contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Simple validation
                if (!name || !email || !message) {
                    alert('Please fill in all fields.');
                    return;
                }
                
                // Show success message
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate sending (in real app, this would be an API call)
                setTimeout(() => {
                    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            });
    
            // Project links functionality
            document.querySelectorAll('.project-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const linkText = this.textContent;
                    
                    if (linkText === 'View Demo') {
                        alert('Demo link will be available soon! Please check back later or contact me for more details.');
                    } else if (linkText === 'Source Code') {
                        alert('Source code will be available on GitHub soon! Please contact me for more information.');
                    }
                });
            });
    
            // CTA button functionality
            document.querySelectorAll('.cta-button').forEach(button => {
                button.addEventListener('click', function(e) {
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
    
            // Contact info links
            document.addEventListener('DOMContentLoaded', function() {
                // Make email clickable
                const emailElements = document.querySelectorAll('div:contains("jadhavsshivani2002@gmail.com")');
                emailElements.forEach(el => {
                    if (el.textContent.includes('jadhavsshivani2002@gmail.com')) {
                        el.innerHTML = el.innerHTML.replace(
                            'jadhavsshivani2002@gmail.com',
                            '<a href="mailto:jadhavsshivani2002@gmail.com" style="color: #00ffff; text-decoration: none;">jadhavsshivani2002@gmail.com</a>'
                        );
                    }
                });
    
                // Make phone clickable
                const phoneElements = document.querySelectorAll('div:contains("+91 7385127602")');
                phoneElements.forEach(el => {
                    if (el.textContent.includes('+91 7385127602')) {
                        el.innerHTML = el.innerHTML.replace(
                            '+91 7385127602',
                            '<a href="tel:+917385127602" style="color: #00ffff; text-decoration: none;">+91 7385127602</a>'
                        );
                    }
                });
    
                // Make LinkedIn clickable
                const linkedinElements = document.querySelectorAll('div:contains("linkedin.com/in/shivani-jadhav-9a1689235")');
                linkedinElements.forEach(el => {
                    if (el.textContent.includes('linkedin.com/in/shivani-jadhav-9a1689235')) {
                        el.innerHTML = el.innerHTML.replace(
                            'linkedin.com/in/shivani-jadhav-9a1689235',
                            '<a href="https://linkedin.com/in/shivani-jadhav-9a1689235" target="_blank" style="color: #00ffff; text-decoration: none;">linkedin.com/in/shivani-jadhav-9a1689235</a>'
                        );
                    }
                });
            });
    
            // Skill bar animation on scroll
            function animateSkillBars() {
                const skillBars = document.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const rect = bar.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    }
                });
            }
    
            // Animate on scroll
            window.addEventListener('scroll', animateSkillBars);
            
            // Initial animation
            setTimeout(animateSkillBars, 1000);
    
            // Add hover effects to cards
            document.querySelectorAll('.skill-card, .project-card, .stat-item').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        