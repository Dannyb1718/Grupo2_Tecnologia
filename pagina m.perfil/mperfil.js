  // Menú hamburguesa
  const hamburguesa = document.getElementById("hamburguesa");
  const menu = document.getElementById("elementos-menu");
  
  hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });
