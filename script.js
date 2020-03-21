const MENU = document.querySelector('.main-nav');
const TAGS = document.querySelector('.tag-list');
const SLIDER = document.querySelector('.slide');
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
        case '#slider':
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'});
            break;
        case '#services':
            window.scrollTo({
                left: 0,
                top: 650,
                behavior: 'smooth'});
            break;
        case '#portfolio':
            window.scrollTo({
                left: 0,
                top: 1150,
                behavior: 'smooth'});
            break;
        case '#team':
            window.scrollTo({
                left: 0,
                top: 2019,
                behavior: 'smooth'});
            break;
        case '#contact':
            window.scrollTo({
                left: 0, 
                top: 2851, 
                behavior: 'smooth'});
            break;
    }
});

window.addEventListener('scroll', () => {   
    MENU.querySelectorAll('.main-nav-item').forEach(item => item.classList.remove('active-menu'));
    let yOffset = window.pageYOffset;
    if(yOffset >= 0 && yOffset < 600) {
        document.querySelector('.main-nav-item:first-child').classList.add('active-menu');
    } else if(yOffset >= 600 && yOffset < 1100) {
        document.querySelector('.main-nav-item:nth-child(2)').classList.add('active-menu');
    } else if(yOffset >= 1100 && yOffset < 1969) {
        document.querySelector('.main-nav-item:nth-child(3)').classList.add('active-menu');
    } else if(yOffset >= 1969 && yOffset < 2801) {
        document.querySelector('.main-nav-item:nth-child(4)').classList.add('active-menu');
    } else if(yOffset >= 2801) {
        document.querySelector('.main-nav-item:last-child').classList.add('active-menu');
    }
});

// Slider
let currentItem = 0;
let isEnabled = true;
let slideItems = document.querySelectorAll('.slide-item');

function changeCurrentItem(n) {
    currentItem = (n + slideItems.length) % slideItems.length;
}

function hideSlide(direction) {
    isEnabled = false;
    slideItems[currentItem].classList.add(direction);
    slideItems[currentItem].addEventListener('animationend', function() {
        this.classList.remove('slide-active', direction);
    });
}

function showSlide(direction) {
    slideItems[currentItem].classList.add('next-slide', direction);
    slideItems[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next-slide', direction);
        this.classList.add('slide-active');
        isEnabled = true;
    });
}

function prevSlide(slide) {
    hideSlide('move-right');
    changeCurrentItem(slide - 1);
    showSlide('from-left');
}

function nextSlide(slide) {
    hideSlide('move-left');
    changeCurrentItem(slide - 1);
    showSlide('from-right');
}

document.querySelector('.arrow-left').addEventListener('click', function() {
    if(isEnabled) {
        prevSlide(currentItem);
    }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    if(isEnabled) {
        nextSlide(currentItem);
    }
});

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
        userInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
    }
});