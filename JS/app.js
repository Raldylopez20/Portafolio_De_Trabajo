// ESTO ES EL CODIGO JS PARA QUE FUNCIONE LA VENTANA MODAL DE VER LAS FOTOS DEL PORTAFOLIO
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', ()=> {
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;
    });
});