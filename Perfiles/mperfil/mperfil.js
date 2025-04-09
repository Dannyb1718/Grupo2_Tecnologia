  // Menú hamburguesa
  const hamburguesa = document.getElementById("hamburguesa");
  const menu = document.getElementById("elementos-menu");
  
  hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });
  function irPortafolio(){
    window.location.href = "../../SubirPort/portfol.html";
  }
  function irAGal() {
    window.location.href = "../../GaleriaDeArt/Galart.html";
  }
  function irAInicio() {
    window.location.href = "../../index.html";
  }
  function irAPedid() {
    window.location.href = "../../MisPedidos/pedidos.html";
  }
  function irASopor() {
    window.location.href = "../../pagina soporte/soporteP.html";
  }
  function irACarr() {
    window.location.href = "../../pagina carrito/carrito.html";
  }
  function irACrear() {
    window.location.href = "../CrearCuen/CrearCuen.html";
  }
  function irAinicioS() {
    window.location.href = "../../IniciarSes/InicioSesion.html";
  }
  function irAPerfil() {
    window.location.href = "../mperfil/mperfil.html";
  }
  function irAContra() {
    window.location.href = "../trasenaperfil/trasenaperfil.html";
  }
  function irAConfi() {
    window.location.href = "../Configperfil/confperfil.html";
  }
  function irAElimin() {
    window.location.href = "../eliminarperf/eliminarperf.html";
  }