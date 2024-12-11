document.addEventListener('DOMContentLoaded', () => {
    // Animación de Scroll
    const scrollElements = document.querySelectorAll('.scroll-element');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Activa elementos visibles al cargar

    // Modal de Imágenes
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');

    // Asegurarse de que el modal esté oculto al inicio
    if (modal) {
        modal.style.display = 'none';

        // Seleccionar imágenes que activan el modal
        const clickableImages = document.querySelectorAll('.clickable');
        clickableImages.forEach((img) => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex'; // Mostrar el modal
                modalImg.src = img.src; // Mostrar la imagen seleccionada
            });
        });

        // Cerrar el modal al hacer clic en la "X"
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Cerrar el modal al hacer clic fuera de la imagen
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});