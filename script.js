const MENU = document.querySelector('.main-nav');
const TAGS = document.querySelector('.tag-list');
const ARROW_LEFT = document.querySelector('.arrow-left');
const ARROW_RIGHT = document.querySelector('.arrow-right');

let counter = 0;

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('active-menu'));
    event.target.closest('li').classList.add('active-menu');

    let link = event.target.getAttribute('href');
    switch(link) {
        case "#slider":
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'});
            break;
        case "#services":
            window.scrollTo({
                left: 0,
                top: 630,
                behavior: 'smooth'});
            break;
        case "#portfolio":
            window.scrollTo({
                left: 0,
                top: 1130,
                behavior: 'smooth'});
            break;
        case "#team":
            window.scrollTo({
                left: 0,
                top: 2000,
                behavior: 'smooth'});
            break;
        case "#contact":
            window.scrollTo({
                left: 0, 
                top: 2740, 
                behavior: 'smooth'});
            break;
    }
});

ARROW_LEFT.addEventListener('click', () => {
    let interval = setInterval(() => {
        document.querySelectorAll('.slider-item').forEach(item => {
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
        document.querySelectorAll('.slider-item').forEach(item => {
            if(item.style.left === '-940px') {
                clearInterval(interval);
                return;
            }

            counter -= 1;
            item.style.left = `${counter}px`;
        });
    }, 5);
});

document.querySelectorAll('.phone').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.phone-img').classList.toggle('phone-inactive');
    });
});

TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('.tag').forEach(item => {
        item.classList.remove('tag-active');
    });

    event.target.classList.add('tag-active');

    if(event) {
        let random = getRandomInt(1, 13);
        let index = random;

        document.querySelectorAll('.portfolio-item img').forEach(item => {
            item.src = `assets/img/portfolio${index}.jpg`;
            index == 12 ? index = 1 : index++ ;
        });
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}