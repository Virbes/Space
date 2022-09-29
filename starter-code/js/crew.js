const boton = document.querySelectorAll('.botones button');
boton.forEach((element) =>{
    element.addEventListener('click', (event) =>{
        boton.forEach((link) =>{
            link.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});


const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const text = document.getElementById('text');
const parrafo = document.getElementById('parrafo');
const titulo = document.getElementById('titulo');
const imagen = document.getElementById('imagen');

boton1.addEventListener('click', ()=>{
    text.textContent = "COMMANDER";
    titulo.textContent = "DOUGLAS HURLEY";
    parrafo.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    imagen.src = "./assets/crew/image-douglas-hurley.webp";
});
boton2.addEventListener('click', ()=>{
    text.textContent = "MISSION SPECIALIST";
    titulo.textContent = "MARK SHUTTLEWORTH";
    parrafo.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    imagen.src = "./assets/crew/image-mark-shuttleworth.webp";
});
boton3.addEventListener('click', ()=>{
    text.textContent = "PILOT";
    titulo.textContent = "VICTOR GLOVER";
    parrafo.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
    imagen.src = "./assets/crew/image-victor-glover.webp";
});
boton4.addEventListener('click', ()=>{
    text.textContent = "FLIGHT ENGINEER";
    titulo.textContent = "ANOUSHES ANSARI";
    parrafo.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    imagen.src = "./assets/crew/image-anousheh-ansari.webp";
});