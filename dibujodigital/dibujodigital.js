document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        alert("Has seleccionado una imagen");
    });
});
