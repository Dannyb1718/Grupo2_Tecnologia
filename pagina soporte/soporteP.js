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
  
  alternarChatbot.addEventListener("click", () => {
    ventanaChatbot.style.display = ventanaChatbot.style.display === "block" ? "none" : "block";
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
  
  