/*----------------------------------------|BOTON SUBIR|----------------------------------------*/

let botonUp = document.getElementById('boton__subir');

botonUp.addEventListener('click', () => {
        window.scrollTo(0, 0);
});

window.onscroll = function () {
    
    let scroll = document.documentElement.scrollTop;

    if(scroll > 500){
        botonUp.classList.add('active');
    } else if(scroll < 500){
        botonUp.classList.remove('active');
    }
}