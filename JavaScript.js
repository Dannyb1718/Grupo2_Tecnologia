let currentSlide = 0; // Índice de la diapositiva actual
const slides = document.querySelectorAll(".slide");

function moveSlide(direction) {
    slides[currentSlide].classList.remove("active"); // Oculta la diapositiva actual
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Calcula el índice de la nueva diapositiva
    slides[currentSlide].classList.add("active"); // Muestra la nueva diapositiva
}
