document.addEventListener('DOMContentLoaded', function (event) {
  const subMenu = document.querySelectorAll('.menu-link.submenu-link');
  const menu = document.querySelectorAll('#menu');

  (function burgerMenu() {
    const btnBurgerMenu = document.getElementById('btn-burger');
    const nav = document.getElementById('menu');

    btnBurgerMenu.addEventListener('click', function () {
      btnBurgerMenu.classList.toggle('close');
      nav.classList.toggle('show');
    });
  })();
});
