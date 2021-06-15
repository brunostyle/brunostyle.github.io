/*----------------------------------------|PORTAFOLIO|----------------------------------------*/

const grid = new Muuri('.grid', {
    layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
		  elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');
            
            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		  });
    });
});

const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item').forEach((elemento) => {
  const descripcion = elemento.dataset.descripcion;
  elemento.querySelector('#overlay .descripcion').innerHTML = descripcion;
});