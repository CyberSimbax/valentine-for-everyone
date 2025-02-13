document.addEventListener('DOMContentLoaded', () => {
    const roseContainer = document.getElementById('roseContainer');
    const growBtn = document.getElementById('growBtn');
    const message = document.getElementById('message');
    const heartsContainer = document.querySelector('.hearts-container');

    // Create initial rose
    createRose(roseContainer.offsetWidth / 2, roseContainer.offsetHeight / 2);

    // Grow more roses on button click
    growBtn.addEventListener('click', () => {
        createRose(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        createHearts();
        message.classList.remove('hidden');
    });

    function createHearts() {
        const emojis = ['💖', '💝', '💜', '💛', '💚'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
        }
        
        const messages = ['You Matter!', 'Be Kind!', 'Love is Love', 'Care Deeply'];
        const message = document.createElement('div');
        message.className = 'floating-message';
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        message.style.left = Math.random() * 80 + 10 + '%';
        message.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(message);
    }

    function createRose(x, y) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.style.left = x + 'px';
        rose.style.top = y + 'px';

        for (let i = 0; i < 12; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `rotate(${i * 30}deg) translateY(-20px)`;
            petal.style.background = `hsl(${Math.random() * 60 + 300}, 70%, 60%)`;
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