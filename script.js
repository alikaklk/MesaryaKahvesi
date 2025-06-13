const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
      
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links li a');
const currentPath = window.location.pathname.split("/").pop();

links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
        link.classList.add('active');
    }
});
