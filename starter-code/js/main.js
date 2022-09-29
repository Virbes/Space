const pages = ['destination', 'crew', 'technology'];
const ruta = window.location.pathname.toLowerCase();

pages.forEach(page => {
    if (ruta.includes(page)) {
        addActive(page);
    } else if (ruta === '/starter-code/' || ruta.includes('index')) {
        addActive('home');
    }
});

/** [Method] Add active to the menu */
function addActive(page) {
    document.querySelector('.menu_' + page).classList.add('active');
    document.querySelector('.modal .menu_' + page).classList.add('active');
}

//** Menu button [Click Event] */
let isClose = false;
const modal = document.getElementById('pre-modal');
const toggleMenu = document.querySelector('#buttonMenu img');

document.getElementById('buttonMenu').addEventListener('click', showMenu);

function showMenu() {

    if (isClose) {
        modal.style.display = 'none';
        toggleMenu.src = 'assets/shared/icon-hamburger.svg';

        isClose = false;
    } else {
        modal.style.display = 'block';
        toggleMenu.src = 'assets/shared/icon-close.svg';

        isClose = true;
    }
}