document.addEventListener('DOMContentLoaded', () => {
    // ... (keep previous code but update these functions)

    // Modified createHearts function with diverse emojis
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
        
        // Add floating messages
        const messages = ['You Matter!', 'Be Kind!', 'Love is Love', 'Care Deeply'];
        const message = document.createElement('div');
        message.className = 'floating-message';
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        message.style.left = Math.random() * 80 + 10 + '%';
        message.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(message);
    }

    // Updated createRose function with varied colors
    function createRose(x, y) {
        // ... (previous code)
        // Modify petal color generation
        petal.style.background = `hsl(${Math.random() * 60 + 300}, 70%, 60%)`; // Purple-red spectrum
        // ... (rest of the code)
    }
});