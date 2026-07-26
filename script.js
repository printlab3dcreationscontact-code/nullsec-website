document.addEventListener('DOMContentLoaded', () => {

    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-*";
        let iteraction = 0;
        
        const interval = setInterval(() => {
            heroTitle.textContent = originalText
                .split('')
                .map((letter, index) => {
                    if (index < iteraction) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join('');
            
            if (iteraction >= originalText.length) {
                clearInterval(interval);
            }

            iteraction += 1 / 3;
        }, 30);
    }

    
    const discoverBtn = document.getElementById('discover-btn');
    const aboutSection = document.getElementById('about');

    if (discoverBtn && aboutSection) {
        discoverBtn.addEventListener('click', () => {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
