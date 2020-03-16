const MENU = document.querySelector('.main-nav');
const TAGS = document.querySelector('.tag-list');
const SLIDER = document.querySelector('.slider');
const SLIDE_ITEM = document.querySelectorAll('.slider-item');
const ARROW_LEFT = document.querySelector('.arrow-left');
const ARROW_RIGHT = document.querySelector('.arrow-right');
const PORTFOLIO_ITEM = document.querySelector('.portfolio-list');

let counter = 0;

// Navigation
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

// Slider
ARROW_RIGHT.addEventListener('click', () => {
    sliderScroll();
});

ARROW_LEFT.addEventListener('click', () => {
    sliderScroll();
});

let sliderScroll = () => {
    SLIDE_ITEM.forEach((item, index, arr) => {
        item.classList.toggle('slide-inactive');
        arr[index + 1].classList.toggle('slide-inactive');

        if(item.classList.value == 'slider-item slide-inactive') {
            SLIDER.style.backgroundColor = '#648BF0';
        } else {
            SLIDER.style.backgroundColor = '#F06C64';
        }
    });
}

// Active/inactive phones
document.querySelectorAll('.phone').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('.phone-img').classList.toggle('phone-inactive');
    });
});

// switch tags and images
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

// Active/inactive portfolio images
PORTFOLIO_ITEM.addEventListener('click', (event) => {
    PORTFOLIO_ITEM.querySelectorAll('.portfolio-item').forEach(item => {
        if(event.target.closest('.portfolio-item').classList.contains('portfolio-item')) {
            item.classList.remove('portfolio-active');
        }
    });

    event.target.closest('.portfolio-item').classList.add('portfolio-active');
});