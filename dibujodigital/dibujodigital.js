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

function irPortafolio(){
    window.location.href = "../SubirPort/portfol.html";
  }
  function irADibujoD() {
    window.location.href = "../dibujodigital/dibujodigital.html";
  }
  function irADibujoT() {
    window.location.href = "../dibujotrad/dibujotrad.html";
  }
  function irAModelado() {
    window.location.href = "../Modelado/mod.html";
  }
  function irAAnima() {
    window.location.href = "../Modelado A/moda.html";
  }
  function irAGal() {
    window.location.href = "../GaleriaDeArt/Galart.html";
  }
  function irAInicio() {
    window.location.href = "../index.html";
  }
  function irAPedid() {
    window.location.href = "../MisPedidos/pedidos.html";
  }
  function irASopor() {
    window.location.href = "../pagina soporte/soporteP.html";
  }
  function irACarr() {
    window.location.href = "../pagina carrito/carrito.html";
  }
  function irAPerfil() {
    window.location.href = "../Perfiles/mperfil/mperfil.html";
  }
  function irACrear() {
    window.location.href = "../CrearCuen/CrearC.html";
  }
  function irAinicioS() {
    window.location.href = "../IniciarSes/InicioSesion.html";
  }
  

      // Menú hamburguesa
      const hamburguesa = document.getElementById("hamburguesa");
      const menu = document.getElementById("elementos-menu");
      
      hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
      });