document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        alert("Has seleccionado una imagen");
    });
});

document.querySelectorAll(".ver-mas").forEach(button => {
    button.addEventListener("click", () => {
        alert("Más detalles próximamente...");
    });
});

