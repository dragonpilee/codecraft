document.addEventListener('DOMContentLoaded', function() {
    // Glitch effect for header
    const glitchText = document.querySelector('.glitch');
    setInterval(() => {
        glitchText.classList.toggle('glitch-effect');
    }, 3000);

    // Neon text effect for links
    const neonLinks = document.querySelectorAll('.neon-underline');
    neonLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
            link.style.textDecorationColor = '#00ff00';
        });
        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });

    // Neon glow effect for footer links
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textShadow = '0 0 10px #00ff00';
        });
        link.addEventListener('mouseout', () => {
            link.style.textShadow = 'none';
        });
    });
});

