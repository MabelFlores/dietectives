document.addEventListener('DOMContentLoaded', () => {
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
    handleScrollAnimation(); // Para activar la animación de los elementos visibles al cargar
});


document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        const lightboxImg = document.createElement("img");
        lightboxImg.src = img.src;
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    });
});