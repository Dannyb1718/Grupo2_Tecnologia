function alternarFAQ(boton) {
    const contenido = boton.nextElementSibling;
    const flecha = boton.querySelector(".flecha");
  
    if (contenido.style.display === "block") {
      contenido.style.display = "none";
      flecha.innerHTML = "&#9654;";
    } else {
      contenido.style.display = "block";
      flecha.innerHTML = "&#9660;";
    }
  }
  
  const alternarChatbot = document.getElementById("alternarChatbot");
  const ventanaChatbot = document.getElementById("ventanaChatbot");
  const enviarMensaje = document.getElementById("enviarMensaje");
  const cuerpoChat = document.getElementById("cuerpoChat");
  const mensajeUsuario = document.getElementById("mensajeUsuario");
  const cerrarChatbot = document.getElementById("cerrarChatbot");
  
  alternarChatbot.addEventListener("click", () => {
    ventanaChatbot.classList.toggle("open");
  });
  
  cerrarChatbot.addEventListener("click", () => {
    ventanaChatbot.classList.remove("open");
  });
  
  enviarMensaje.addEventListener("click", () => {
    const texto = mensajeUsuario.value.trim();
    if (texto !== "") {
      const mensaje = document.createElement("div");
      mensaje.classList.add("mensaje-usuario");
      mensaje.innerHTML = `<div class="burbuja-mensaje">${texto}</div>`;
      cuerpoChat.appendChild(mensaje);
      mensajeUsuario.value = "";
      cuerpoChat.scrollTop = cuerpoChat.scrollHeight;
    }
  });
  
   // Menú hamburguesa
   const hamburguesa = document.getElementById("hamburguesa");
   const menu = document.getElementById("elementos-menu");
   
   hamburguesa.addEventListener("click", () => {
     menu.classList.toggle("mostrar");
   });

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
  function irAPerfil() {
    window.location.href = "../Perfiles/mperfil/mperfil.html";
  }
  function irACrear() {
    window.location.href = "../CrearCuen/CrearCuen.html";
  }
  function irAinicioS() {
    window.location.href = "../IniciarSes/InicioSesion.html";
  }
  
  
  
  