const MENU = document.querySelector('.main-nav');

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

