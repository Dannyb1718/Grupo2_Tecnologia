fetch("artistas.json")
  .then(response => response.json())
  .then(data => {
    cargarGaleria(data.galeria);
    cargarArtistas(data.artistas);
  });

function cargarGaleria(imagenes) {
  const galeria = document.getElementById("galeria");
  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Imagen de galería";
    img.addEventListener("click", () => {
      alert("Has seleccionado una imagen");
    });
    galeria.appendChild(img);
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
            ${artista.obras.map(img => `<img src="${img}" alt="Arte de ${artista.nombre}">`).join('')}
          </div>
          <button class="ver-mas" onclick="irAGal()">Ver más</button>
        </div>
      </div>`;
    contenedor.appendChild(div);
  });
}

// Funciones de navegación
function irPortafolio(){ window.location.href = "../SubirPort/portfol.html"; }
function irADibujoD(){ window.location.href = "../dibujodigital/dibujodigital.html"; }
function irADibujoT(){ window.location.href = "../dibujotrad/dibujotrad.html"; }
function irAModelado(){ window.location.href = "../Modelado/mod.html"; }
function irAAnima(){ window.location.href = "../Modelado A/moda.html"; }
function irAGal(){ window.location.href = "../GaleriaDeArt/Galart.html"; }
function irAInicio(){ window.location.href = "../index.html"; }
function irAPedid(){ window.location.href = "../MisPedidos/pedidos.html"; }
function irASopor(){ window.location.href = "../pagina soporte/soporteP.html"; }
function irACarr(){ window.location.href = "../pagina carrito/carrito.html"; }
function irAPerfil(){ window.location.href = "../Perfiles/mperfil/mperfil.html"; }
function irACrear(){ /* implementar */ }
function irAinicioS(){ window.location.href = "IniciarSes/InicioSesion.html"; }

// Menú hamburguesa
document.getElementById("hamburguesa").addEventListener("click", () => {
  document.getElementById("elementos-menu").classList.toggle("mostrar");
});