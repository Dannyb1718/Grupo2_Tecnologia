fetch("artistdigi.json")
  .then(response => response.json())
  .then(artistas => {
    const contenedor = document.getElementById("contenedor-artistas");
    artistas.forEach(artista => {
      const artistaHTML = `
        <div class="artist-container">
            <div class="nombre">
                <p><strong>Nombre:</strong> ${artista.nombre}</p>
            </div>
            <div class="artist-card">
                <img src="${artista.perfil}" alt="Perfil de ${artista.nombre}">
                <div class="informacion">
                    <div class="info">
                        <p><strong>Especialidad:</strong> ${artista.especialidad}</p>
                        <p><strong>Calificación:</strong> ${artista.calificacion}</p>
                    </div>
                    <div class="perfiles">
                        ${artista.galeria.map(img => `<img src="${img}" alt="Arte de ${artista.nombre}">`).join("")}
                    </div>
                    <button class="ver-mas" onclick="irAGal()">Ver más</button>
                </div>
            </div>
        </div>`;
      contenedor.innerHTML += artistaHTML;
    });
  });

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
    /*window.location.href = "pagina carrito/carrito.html";*/
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