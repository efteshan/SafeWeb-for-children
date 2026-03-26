// I am hooking into the DOM content loaded event here to make sure all my HTML is ready before I fire up my scripts.
document.addEventListener('DOMContentLoaded', () => {

    /* --- I want a sticky header that gets a cool blur effect when I scroll down --- */
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- I'm using IntersectionObserver because I want all cards and titles to magically float in when I scroll to them --- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // This makes the animation trigger just slightly before it fully appears
    };

    // I'm defining what happens when the elements intersecting are seen
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // I am adding my 'active' class here to trigger the CSS transition
                scrollObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    /* --- Light Mode Toggle --- */
    // I am dynamically injecting a theme toggle button into the navigation wrap so I don't have to edit all 9 HTML files manually!
    const navWrap = document.querySelector('.header-inner');
    if (navWrap) {
        const themeWrapper = document.createElement('div');
        themeWrapper.style.marginLeft = "1.5rem";
        themeWrapper.style.flexShrink = "0";

        // --- NEW SLIDEBAR WITH ICONS INSIDE THE THUMB ---
        themeWrapper.innerHTML = `
          <label class="modern-theme-slider" aria-label="Toggle Night and Day Mode" tabindex="0" role="switch">
            <input type="checkbox" id="theme-switch" aria-hidden="true">
            <div class="slider-track">
              <div class="slider-thumb">
                  <!-- TARGET: PLACE YOUR CUSTOM SVG OR IMG ICONS HERE -->
                  <!-- The 'moon-icon' shows in dark mode, 'sun-icon' in light mode -->
                  <img src="images/pngs/sun.png" class="thumb-icon moon-icon" alt="" />
                  <img src="images/pngs/moon.png" class="thumb-icon sun-icon" alt="" />
              </div>
            </div>
          </label>
        `;

        navWrap.appendChild(themeWrapper);

        const checkbox = themeWrapper.querySelector('#theme-switch');
        const slidebar = themeWrapper.querySelector('.modern-theme-slider');
        
        slidebar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            } else if (e.key === 'ArrowRight') {
                if (!checkbox.checked) {
                    checkbox.checked = true;
                    checkbox.dispatchEvent(new Event('change'));
                }
            } else if (e.key === 'ArrowLeft') {
                if (checkbox.checked) {
                    checkbox.checked = false;
                    checkbox.dispatchEvent(new Event('change'));
                }
            }
        });

        const syncState = () => {
            let theme = document.documentElement.getAttribute('data-theme');
            checkbox.checked = (theme === 'light');
            slidebar.setAttribute('aria-checked', checkbox.checked);
        };

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
        syncState();

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            }
            syncState();
        });
    }

    // I need to add my base 'reveal' class to everything I want to animate so the CSS knows what to do
    const elementsToReveal = document.querySelectorAll('.card, .content-card, .section-heading, .stat, .hero-content > *');
    elementsToReveal.forEach((el, i) => {
        el.classList.add('reveal');
        // I am adding a tiny transition delay based on index so they cascade beautifully!
        el.style.transitionDelay = ""+ (i % 3) * 0.15 +"s"; 
        scrollObserver.observe(el);
    });

    /* --- Parallax Effect on my Cards --- */
    // I thought it would be super cool if the cards tilted subtly towards my mouse cursor when I hover over them.
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // I'm calculating the cursor's exact X/Y inside this specific card
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // I'm doing some quick math to rotate it slightly (-5 to 5 degrees) based on how far the mouse is from the center
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale3d(1.02, 1.02, 1.02)";
        });

        // When I move my mouse away, I want it to smoothly snap back to zero
        card.addEventListener('mouseleave', () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });

    /* --- Dynamic Form Submission --- */
    // Instead of reloading the page, I want my form to do a sleek little animation and say thank you.
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // I don't want the default behavior
            const btn = form.querySelector('button[type="submit"]');
            btn.innerText = 'Transmitting Data...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            // Simulating a network request for 1.5s
            setTimeout(() => {
                form.innerHTML = "<div style='text-align:center; padding: 3rem;'><h2 style='color: var(--accent-blue);'>Data Received</h2><p>Thank you for submitting your feedback! I appreciate it.</p></div>";
            }, 1500);
        });
    }

});




/* --- Dynamic Interactive 3D Tech Particle Net for Hero Section --- */
const initHeroBackground = () => {
    const heroShape = document.querySelector('.hero-shape');
    if (!heroShape) return;
    
    heroShape.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none'; // Ignore clicks to allow text selecting
    
    // Add a beautiful smooth fade-out at the bottom so it blends seamlessly into the rest of the page!
    // Extended bottom mask to stretch naturally slightly behind stats bar
    canvas.style.maskImage = 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)';
    canvas.style.webkitMaskImage = 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)';
    
    heroShape.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null, radius: 250 };

    const resize = () => {
        width = canvas.width = heroShape.offsetWidth;
        height = canvas.height = heroShape.offsetHeight;
        init(); // Re-init on resize to fill gracefully
    };
    window.addEventListener('resize', resize);
    
    // Let the mouse track interact globally
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.5 + 0.5; // Slightly smaller dots for elegance
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 20) + 1;
            this.isBlue = Math.random() > 0.5;
        }
        draw() {
            let isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
            
            // Choosing colors based on the theme so it perfectly blends!
            ctx.fillStyle = this.isBlue 
                ? (isLightMode ? '#0284c7' : '#38bdf8') 
                : (isLightMode ? '#9333ea' : '#c084fc');
            ctx.globalAlpha = isLightMode ? 0.35 : 0.6; // Much softer appearance
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
        update() {
            // Interactive mouse push
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let force = (mouse.radius - distance) / mouse.radius;
                    this.x -= forceDirectionX * force * this.density;
                    this.y -= forceDirectionY * force * this.density;
                } else {
                    if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 15;
                    if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 15;
                }
            } else {
                if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 15;
                if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 15;
            }
            // Ambient flowing drift upwards
            this.baseY -= 0.2;
            this.baseX += (Math.random() - 0.5) * 0.3;
            if (this.baseY < -50) {
                this.baseY = height + 50;
                this.baseX = Math.random() * width;
                this.x = this.baseX;
                this.y = this.baseY;
            }
        }
    }

    const init = () => {
        particles = [];
        let n = (width * height) / 14000; // slightly sparser to avoid clutter
        for (let i = 0; i < n; i++) particles.push(new Particle());
    };

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        let isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
        let lineRgb = isLightMode ? '15, 23, 42' : '226, 232, 240'; // Text dark or light
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            // Draw connecting grid webs
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = dx * dx + dy * dy;
                if (distance < 7000) {
                    ctx.beginPath();
                    let opacity = 0.12 - distance/58000; // Softer line fade
                    ctx.strokeStyle = `rgba(${lineRgb}, ${Math.max(0, opacity)})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    };
    resize(); // initial setup
    animate();
};
initHeroBackground();




