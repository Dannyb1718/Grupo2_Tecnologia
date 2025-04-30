fetch("animacon3d.json")
  .then(response => response.json())
  .then(data => {
    cargarGaleria(data.galeria);
    cargarArtistas(data.artistas);
  });

function cargarGaleria(videos) {
  const galeria = document.getElementById("galeria");
  videos.forEach(src => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add("video-hover");
    
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    
    video.appendChild(source);
    video.addEventListener("click", () => {
      alert("Has seleccionado un video");
    });
    
    galeria.appendChild(video);
  });
}

function cargarArtistas(artistas) {
  const contenedor = document.getElementById("contenedor-artistas");
  artistas.forEach(artista => {
    const div = document.createElement("div");
    div.className = "artist-container";
    div.innerHTML = `
      <div class="nombre"><p><strong>Nombre:</strong> ${artista.nombre}</p></div>
      <div class="artist-card">
        <img src="${artista.perfil}" alt="Perfil de ${artista.nombre}">
        <div class="informacion">
          <div class="info">
            <p><strong>Especialidad:</strong> ${artista.especialidad}</p>
            <p><strong>Calificación:</strong> ${artista.calificacion}</p>
          </div>
          <div class="perfiles">
            ${artista.obras.map(obra => `
              <video autoplay loop muted class="video-hover">
                <source src="${obra}" type="video/mp4">
              </video>
            `).join('')}
          </div>
          <button class="ver-mas" onclick="irAGal()">Ver más</button>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

function irPortafolio() {
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