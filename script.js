document.addEventListener('DOMContentLoaded', () => {
    const roseContainer = document.getElementById('roseContainer');
    const growBtn = document.getElementById('growBtn');
    const message = document.getElementById('message');
    const heartsContainer = document.querySelector('.hearts-container');
    let clickCount = 0; // Optional: track clicks for special surprise

    // Create initial rose
    createRose(roseContainer.offsetWidth / 2, roseContainer.offsetHeight / 2);

    // Grow more roses on button click
    growBtn.addEventListener('click', () => {
        clickCount++;
        createRose(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        createHearts();
        createPersonalizedMessages(); // New function for personalized floating messages
        message.classList.remove('hidden');
        
        // Optional: Special message after certain number of clicks
        if (clickCount === 10) {
            setTimeout(() => {
                const specialMsg = document.createElement('div');
                specialMsg.className = 'floating-message';
                specialMsg.textContent = '10 clicks = 10x more love for you! 💕';
                specialMsg.style.left = '50%';
                specialMsg.style.top = '50%';
                specialMsg.style.fontSize = '2rem';
                specialMsg.style.color = '#FF1493';
                document.body.appendChild(specialMsg);
                setTimeout(() => specialMsg.remove(), 4000);
            }, 500);
        }
    });

    function createHearts() {
        // More romantic emoji selection for Princess Galo
        const emojis = ['👑', '💕', '💗', '💓', '💘', '💖', '💝', '🥰', '❤️', '🤍'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px'; // Random sizes
            heartsContainer.appendChild(heart);
        }
    }

    // NEW: Personalized floating messages for Princess Galo
    function createPersonalizedMessages() {
        const messages = [
            'Thinking of you, Princess 👑',
            'Miss you so much 💕',
            'You\'re my peace ✨',
            'Wish you were here 🌹',
            'My favorite person 💗',
            'Distance means nothing 💫',
            'You\'re worth it all 🤍',
            'Forever yours ❤️',
            'My Queen 👸',
            'Love you more! 💕',
            'Can\'t wait to hold you 💑',
            'You\'re my everything 🌟',
            'My Princess Galo 💖',
            'Stronger than distance ✨',
            'You make me smile 😊',
            'Beautiful inside and out 💝'
        ];
        
        // Show 5 floating messages one after another
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const message = document.createElement('div');
                message.className = 'floating-message';
                message.textContent = messages[Math.floor(Math.random() * messages.length)];
                message.style.left = Math.random() * 80 + 10 + '%';
                message.style.color = `hsl(${Math.random() * 20 + 340}, 80%, 65%)`; // Pink/red spectrum
                message.style.fontSize = '1.3rem';
                message.style.fontWeight = 'bold';
                message.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
                message.style.background = 'rgba(255, 255, 255, 0.95)';
                message.style.padding = '0.5rem 1rem';
                message.style.borderRadius = '20px';
                message.style.border = '2px solid #FF69B4';
                document.body.appendChild(message);
                
                // Remove message after animation
                setTimeout(() => message.remove(), 4000);
            }, i * 500); // Stagger the messages
        }
    }

    function createRose(x, y) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.style.left = x + 'px';
        rose.style.top = y + 'px';

        // Romantic color palette for Princess Galo
        const herColors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#DB7093', '#FFB3C6', '#FF99CC', '#FF85B3'];
        
        for (let i = 0; i < 12; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `rotate(${i * 30}deg) translateY(-20px)`;
            petal.style.background = herColors[Math.floor(Math.random() * herColors.length)];
            rose.appendChild(petal);
        }

        const stem = document.createElement('div');
        stem.style.position = 'absolute';
        stem.style.width = '5px';
        stem.style.height = '100px';
        stem.style.background = '#228B22';
        stem.style.top = '30px';
        stem.style.left = '7.5px';
        rose.appendChild(stem);

        roseContainer.appendChild(rose);

        setTimeout(() => {
            rose.style.transform = `scale(2) rotate(${Math.random() * 360}deg)`;
        }, 100);
    }
});