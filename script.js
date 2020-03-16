const MENU = document.querySelector('.main-nav');
const TAGS = document.querySelector('.tag-list');
const SLIDER = document.querySelector('.slider');
const SLIDE_ITEM = document.querySelectorAll('.slider-item');
const ARROW_LEFT = document.querySelector('.arrow-left');
const ARROW_RIGHT = document.querySelector('.arrow-right');
const PORTFOLIO_ITEM = document.querySelector('.portfolio-list');
const FORM_BUTTON = document.querySelector('.btn-submit');
const MODAL_BUTTON = document.querySelector('.modal-btn');

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
    item.addEventListener('click', (event) => {
        if(event.target.classList.contains('phone-base')) {
            item.querySelector('.phone-img').classList.toggle('phone-inactive');
        }
    });
});

// switch tags and images
TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('.tag').forEach(item => {
        if(event.target.classList.contains('tag')) {
            item.classList.remove('tag-active');
        }
    });

    if(event.target.classList.contains('tag')) {
        event.target.classList.add('tag-active');
    }

    if(event.target.classList.contains('tag')) {
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

// Form
let form = document.querySelector('form');
let userInput = form.querySelector('#user-name');
let emailInput = form.querySelector('#user-email');
let subject = form.querySelector('#topic');
let text = form.querySelector('textarea');
let modal = document.querySelector('.modal');
let modalSubject = modal.querySelector('.modal-subject');
let modalText = modal.querySelector('.modal-text');

FORM_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = form.checkValidity();
    let userValid = /^[a-zA-Z]*$/;
    let emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(isValid) {
        if(event.target) {
            modal.classList.add('modal-active');

            if(subject.value == '') {
                modalSubject.textContent = 'Without subject';
            } else {
                modalSubject.textContent = 'Subject: ' + subject.value;
            }

            if(text.value == '') {
                modalText.textContent = 'Without description';
            } else {
                modalText.textContent = 'Description: ' + text.value;
            }
        }
    } else {
        userInput.value == '' || userValid.test(userInput.value)
            ? userInput.classList.add('invalid')
            : userInput.classList.remove('invalid');

        emailInput.value == '' || !emailValid.test(emailInput.value)
            ? emailInput.classList.add('invalid')
            : emailInput.classList.remove('invalid');
    }
});

MODAL_BUTTON.addEventListener('click', (event) => {
    if(event.target) {
        modal.classList.remove('modal-active');
        userInput.value = '';
        emailInput.value = '';
        subject.value = '';
        text.value = '';
    }
});