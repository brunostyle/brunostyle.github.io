/*----------------------------------------|MENU|----------------------------------------*/

let menu = document.getElementById('menu');
let menuLista = document.getElementById('menu-lista'),
    menuBoton = document.getElementById('menu-boton');

menuBoton.addEventListener('click', () => {
    menu.classList.toggle('activo');
    menuLista.classList.toggle('activo');
    menuBoton.classList.toggle('menu-active');
})

let botones = document.querySelectorAll('.menu__lista__opcion a');

botones.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        botones.forEach((seleccionado) => {
            seleccionado.classList.remove('activo');
        });
        elemento.classList.add('activo');
        menuLista.classList.remove('activo');
        menuBoton.classList.toggle('menu-active');
    })
});

/* ACTIVO EL LINK CUANDO EL SCROLL ESTE ENCIMA DE UNA SECCION */

let sections = document.querySelectorAll('section[id]');

function scrollActive () {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu__lista__opcion a[href*=' + sectionId + ']').classList.add('activo');
        } else {
            document.querySelector('.menu__lista__opcion a[href*=' + sectionId + ']').classList.remove('activo');
        }
    });
}

window.addEventListener('scroll', scrollActive);
