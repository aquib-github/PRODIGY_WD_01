// Background slideshow for hero section
const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');

// Background images
const bgImages = [
    'assets/background_images/codm.jpg',
    'assets/background_images/valorant.jpg',
    'assets/background_images/pubg.jpg',
    'assets/background_images/fortnite.jpg'
];

// Preload images
bgImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Slideshow rotation
let i = 0;
setInterval(() => {
    hero.style.background = `url(${bgImages[i]}) no-repeat center center / cover`;
    i = (i + 1) % bgImages.length;
}, 5000);

// ✅ Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
