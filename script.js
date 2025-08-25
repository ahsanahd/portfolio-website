const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.navitems');

menuBtn.addEventListener('click', () => {
  navItems.classList.toggle('active');
  menuBtn.innerHTML = navItems.classList.contains('active') ? '&times;' : '&#9776;';
});
