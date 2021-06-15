/*----------------------------------------|SERVICIOS|----------------------------------------*/

let servicios = document.querySelectorAll('.servicios__contenedor a');

servicios.forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        e.preventDefault();
    })
});
