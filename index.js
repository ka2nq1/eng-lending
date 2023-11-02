
const menu = document.querySelector('.burger-menu');
const button = menu.querySelector('.burger-menu_button, .burger-menu_lines');
const links = menu.querySelectorAll('.burger-menu_link, .close-menu');
const overlay = menu.querySelector('.burger-menu_overlay');
button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
});
links.forEach((link) => {
    link.addEventListener('click', toggleMenu);
});
overlay.addEventListener('click', toggleMenu);
function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    if (menu.classList.contains('burger-menu_active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
}