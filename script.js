const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
});