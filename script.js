const MENU = document.querySelector('.main-nav');
const ARROW_LEFT = document.querySelector('.arrow-left');
const ARROW_RIGHT = document.querySelector('.arrow-right');

let counter = 0;

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('active-menu'));
    event.target.closest('li').classList.add('active-menu');

    let link = event.target.getAttribute('href');
    switch(link) {
        case "#slider":
            window.scrollTo(0, 0);
            break;
        case "#services":
            window.scrollTo(0, 630);
            break;
        case "#portfolio":
            window.scrollTo(0, 1130);
            break;
        case "#team":
            window.scrollTo(0, 2000);
            break;
        case "#contact":
            window.scrollTo(0, 2800);
            break;
    }
});

ARROW_LEFT.addEventListener('click', () => {
    let interval = setInterval(() => {
        document.querySelectorAll('.slider-item').forEach((item) => {
            if(item.style.left === '0px') {
                clearInterval(interval);
                return;
            }

            counter += 1;
            item.style.left = `${counter}px`;
        });
    }, 5);
});

ARROW_RIGHT.addEventListener('click', () => {
    let interval = setInterval(() => {
        document.querySelectorAll('.slider-item').forEach((item) => {
            if(item.style.left === '-940px') {
                clearInterval(interval);
                return;
            }

            counter -= 1;
            item.style.left = `${counter}px`;
        });
    }, 5);
});