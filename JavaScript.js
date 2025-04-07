let currentSlide = 0;

  function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    // Si se pasa del final, vuelve al principio, y viceversa
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }

    // Mover el contenedor de slides
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function irPortafolio(){
    window.location.href = "SubirPort/portfol.html";
  }