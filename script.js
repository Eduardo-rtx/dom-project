const parrafo = document.getElementById('parrafo');
const botonCambioColor = document.getElementById('boton-cambio');
const botonCambioTexto = document.getElementById('boton-cambio-texto');
const lista = document.getElementById('lista');

// hacer que el texto sea aleatorio al hacer clic en el botón
const textos = [
    'El contenido del párrafo ha cambiado gracias a JavaScript.',
    'Este es otro texto aleatorio.',
    '¡JavaScript es genial para cambiar textos!',
    'Texto aleatorio número cuatro.',
    'Último texto aleatorio.'
];
// Cambiamos el contenido de un párrafo
// hacer que el texto sea aleatorio al hacer clic en el botón
botonCambioTexto.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * textos.length);
    parrafo.textContent = textos[indiceAleatorio];
});

//Cambiamos el color de fondo de la página al hacer clic en el botón
botonCambioColor.addEventListener('click', () => {
    let digitos = '0123456789ABCDEF'; // Dígitos hexadecimales
    let color = '#'; // Inicializa el color con el símbolo #
    for (let i = 0; i < 6; i++) {
        color += digitos[Math.floor(Math.random() * 16)]; // Agrega un dígito aleatorio
    }
    return document.body.style.backgroundColor = color; // Cambia el color de fondo
});

// Función para eliminar el párrafo
function eliminarParrafo() {
    const parrafoEliminado = document.getElementById('parrafo-eliminado');
    
    // Verificar si el párrafo existe antes de eliminarlo
    if (parrafoEliminado) {
        parrafoEliminado.remove();
    } else {
        console.log("El párrafo ya no existe o no se encontró.");
    }
}

// Asignar la función al botón
document.getElementById('boton-eliminar').addEventListener('click', eliminarParrafo);
