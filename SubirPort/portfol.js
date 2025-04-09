
  
  function irPortafolio(){
    window.location.href = "../SubirPort/portfol.html";
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
  function Agregar() {
      alert('¡Formulario agregado al carrito!');
  }

  function irACrear() {
    window.location.href = "../CrearCuen/CrearC.html";
  }
  function irAInicioS() {
    window.location.href = "../IniciarSes/InicioSesion.html";
  }
  

    // Menú hamburguesa
    const hamburguesa = document.getElementById("hamburguesa");
    const menu = document.getElementById("elementos-menu");
    
    hamburguesa.addEventListener("click", () => {
      menu.classList.toggle("mostrar");
    });