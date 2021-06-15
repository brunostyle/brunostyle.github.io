/*----------------------------------------|HABILIDADES|----------------------------------------*/

let habilidadesContenido = document.getElementsByClassName('habilidades__contenido'),
    habilidadesHeader = document.querySelectorAll('.habilidades__header');

function toggleHabilidad () {
    let itemClass = this.parentNode.ClassName;

    for (let i = 0; i < habilidadesContenido.length; i++) {
        habilidadesContenido[i].className = 'habilidades__contenido habilidad__cerrada';
        itemClass = 'habilidades__contenido habilidad__cerrada';
    }

    if(itemClass === 'habilidades__contenido habilidad__cerrada'){
        this.parentNode.className = 'habilidades__contenido habilidad__abierta';
    }
    
    habilidadesHeader.forEach((el) => {
        el.classList.remove('activo');
    });
    
    this.classList.add('activo');
}

habilidadesHeader.forEach((el) => {
    el.addEventListener('click', toggleHabilidad);
});