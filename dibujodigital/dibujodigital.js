document.addEventListener("DOMContentLoaded", () => {
  fetch("artistdigi.json")
    .then(response => response.json())
    .then(data => {
      const galeria = document.getElementById("galeria");
      const contenedorArtistas = document.getElementById("contenedor-artistas");

      // Mostrar imágenes en la galería
      data.galeria.forEach(imagen => {
        const imgElement = document.createElement("img");
        imgElement.src = imagen;
        imgElement.alt = "Imagen de dibujo digital";
        imgElement.addEventListener("click", () => {
          alert("Has seleccionado una imagen");
        });
        galeria.appendChild(imgElement);
      });

      // Mostrar artistas
      data.artistas.forEach(artista => {
        const artistContainer = document.createElement("div");
        artistContainer.classList.add("artist-container");

        const nombre = document.createElement("div");
        nombre.classList.add("nombre");
        nombre.innerHTML = `<p><strong>Nombre:</strong> ${artista.nombre}</p>`;

        const artistCard = document.createElement("div");
        artistCard.classList.add("artist-card");

        const imgPerfil = document.createElement("img");
        imgPerfil.src = artista.perfil;
        imgPerfil.alt = `Perfil de ${artista.nombre}`;

        const info = document.createElement("div");
        info.classList.add("informacion");

        const infoText = document.createElement("div");
        infoText.classList.add("info");
        infoText.innerHTML = `
          <p><strong>Especialidad:</strong> ${artista.especialidad}</p>
          <p><strong>Calificación:</strong> ${artista.calificacion}</p>
        `;

        const perfiles = document.createElement("div");
        perfiles.classList.add("perfiles");
        artista.obras.forEach(obra => {
          const imgObra = document.createElement("img");
          imgObra.src = obra;
          imgObra.alt = `Arte de ${artista.nombre}`;
          perfiles.appendChild(imgObra);
        });

        const btnVerMas = document.createElement("button");
        btnVerMas.classList.add("ver-mas");
        btnVerMas.innerText = "Ver más";
        btnVerMas.addEventListener("click", () => {
          alert("Más detalles próximamente...");
        });

        info.appendChild(infoText);
        info.appendChild(perfiles);
        info.appendChild(btnVerMas);

        artistCard.appendChild(imgPerfil);
        artistCard.appendChild(info);

        artistContainer.appendChild(nombre);
        artistContainer.appendChild(artistCard);

        contenedorArtistas.appendChild(artistContainer);
      });
    });
});

function irPortafolio() { window.location.href = "../SubirPort/portfol.html"; }
function irADibujoD() { window.location.href = "../dibujodigital/dibujodigital.html";}
function irADibujoT() {window.location.href = "../dibujotrad/dibujotrad.html";}
function irAModelado() {window.location.href = "../Modelado/mod.html";}
function irAAnima() {window.location.href = "../Modelado A/moda.html";}
function irAGal() {window.location.href = "../GaleriaDeArt/Galart.html";}
function irAInicio() {window.location.href = "../index.html";}
function irAPedid() {window.location.href = "../MisPedidos/pedidos.html";}
function irASopor() {window.location.href = "../pagina soporte/soporteP.html";}
function irACarr() {window.location.href = "../pagina carrito/carrito.html";}
function irAPerfil() {window.location.href = "../Perfiles/mperfil/mperfil.html";}
function irACrear() {/*window.location.href = "pagina carrito/carrito.html";*/}
function irAinicioS() {window.location.href = "../IniciarSes/InicioSesion.html";}

// Menú hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("elementos-menu");

hamburguesa.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});
