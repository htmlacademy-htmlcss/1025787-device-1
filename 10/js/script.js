const menuBtn = document.querySelector('.navigation-link-button');
const menu = document.querySelector('.navigation-list-catalog-container');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menu.classList.toggle('is-active');
})
