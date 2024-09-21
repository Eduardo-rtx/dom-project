// Selección de elementos por ID
const parrafo = document.getElementById('parrafo');
const botonCambio = document.getElementById('boton-cambio');
const lista = document.getElementById('lista');

// Acción 1: Cambiar el contenido de un párrafo
botonCambio.addEventListener('click', () => {
    parrafo.textContent = 'El contenido del párrafo ha cambiado gracias a JavaScript.';
});

// Acción 2: Agregar un nuevo elemento a la lista
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent = 'Nuevo elemento';
lista.appendChild(nuevoElemento);

// Acción 3: Cambiar el color de fondo de la página al hacer clic en el botón
botonCambio.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f7fa'; // Cambia el color de fondo a un tono azul claro
});
