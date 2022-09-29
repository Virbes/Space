import data from '../data.json' assert {type: 'json'};

let moonBtn = document.querySelector('#moon');
let marsBtn = document.querySelector('#mars');
let europaBtn = document.querySelector('#europa');
let titanBtn = document.querySelector('#titan');

let imagen = document.querySelector('#images');
let titulo = document.querySelector('#name');
let descripcion = document.querySelector('#description');
let distancia = document.querySelector('#distance');
let treav = document.querySelector('#travel');
let indexPlanet = 0;

moonBtn.addEventListener('click', showHTML);
marsBtn.addEventListener('click', showHTML);
titanBtn.addEventListener('click', showHTML);
europaBtn.addEventListener('click', showHTML);

function showHTML(e) {
    e.preventDefault();
    indexPlanet= data.destinations.findIndex(planet => 
        planet.name.toLowerCase() === this.id
    );

    titulo.innerHTML = data.destinations[indexPlanet].name;
    descripcion.innerHTML = data.destinations[indexPlanet].description;
    imagen.src = data.destinations[indexPlanet].images.png;
    distancia.innerHTML = data.destinations[indexPlanet].distance;
    treav.innerHTML = data.destinations[indexPlanet].travel;
}