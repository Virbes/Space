// Variables declaration
const windowWidth = window.innerWidth;
const isDesktop = 1440 >= windowWidth && windowWidth > 768;
const button1 = document.querySelector('.buttonTech-1');
const button2 = document.querySelector('.buttonTech-2');
const button3 = document.querySelector('.buttonTech-3');
const title = document.querySelector('.title-technology');
const image = document.querySelector('.technology-image img');
const description = document.querySelector('.technology-description');
// End of variables declaration


if (isDesktop) {
    document.querySelector('.technology-image img').src = 'assets/technology/image-launch-vehicle-portrait.jpg';
} else {
    document.querySelector('.technology-image img').src = 'assets/technology/image-launch-vehicle-landscape.jpg';
}

button1.addEventListener('click', getData);
button2.addEventListener('click', getData);
button3.addEventListener('click', getData);

function getData() {
    const dataTech = this.getAttribute('dataTech');

    addButtonActive(this);

    const url = 'data.json';
    fetch(url)
        .then(result => result.json())
        .then(resultado => showHTML(resultado.technology[dataTech]));
}

function showHTML(data) {
    title.innerHTML = data.name;
    isDesktop ? image.src = data.images.portrait : image.src = data.images.landscape;
    description.innerHTML = data.description;
}

function addButtonActive(button) {
    document.querySelector('#technologies .active').classList.remove('active');
    button.classList.add('active');
}