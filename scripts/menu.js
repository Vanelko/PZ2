const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
    }
});

const closeBtn = document.querySelector('.nav-close');

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});