document.addEventListener('DOMContentLoaded', () => {
  const burgers = Array.from(document.querySelectorAll('.navbar-burger'));

  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = targetId ? document.getElementById(targetId) : null;
      burger.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', burger.classList.contains('is-active') ? 'true' : 'false');
      if (target) target.classList.toggle('is-active');
    });
  });

  document.querySelectorAll('.navbar-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      const burger = document.querySelector('.navbar-burger');
      const menu = document.getElementById(burger ? burger.dataset.target : '');
      if (burger && menu) {
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
      }
    });
  });
});
