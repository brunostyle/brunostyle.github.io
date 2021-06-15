/*----------------------------------------|MENU|----------------------------------------*/

let menu = document.getElementById('menu');
let menuLista = document.getElementById('menu-lista'),
    menuBoton = document.getElementById('menu-boton');

menuBoton.addEventListener('click', () => {
    menu.classList.toggle('activo');
    menuLista.classList.toggle('activo');
})

let botones = document.querySelectorAll('.menu__lista__opcion a');

botones.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        botones.forEach((seleccionado) => {
            seleccionado.classList.remove('activo');
        });
        elemento.classList.add('activo');
        menuLista.classList.remove('activo');
    })
});