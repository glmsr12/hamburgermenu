const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
