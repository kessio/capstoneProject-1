const menuNav = document.querySelector('.mobile-nav-list');
const hamburger = document.getElementById('hamburger-menu');
const menuItems = document.querySelectorAll('.mobile-nav-item');
const closemenu = document.querySelector('.close-menu');
hamburger.addEventListener('click', () => {
  menuNav.classList.toggle('active');
});
closemenu.addEventListener('click', () => { menuNav.classList.remove('active'); });
menuItems.forEach((n) => n.addEventListener('click', () => {
  menuNav.classList.remove('active');
}));
