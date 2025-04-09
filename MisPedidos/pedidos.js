// Esperar a que cargue todo el contenido
document.addEventListener("DOMContentLoaded", function () {
    const cancelarBtns = document.querySelectorAll(".cancelar");
    const detallesBtns = document.querySelectorAll(".detalles");
  
    cancelarBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const confirmado = confirm("¿Estás seguro de cancelar este pedido?");
        if (confirmado) {
          alert("Pedido cancelado correctamente.");
          btn.closest(".pedido").style.opacity = "0.4";
          btn.closest(".pedido").querySelector("p:nth-child(4)").textContent = "Estado del Pedido: Cancelado";
          btn.disabled = true;
          btn.nextElementSibling.disabled = true;
        }
      });
    });
  
       // Botón para ver más detalles
       detallesBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const pedido = btn.closest(".pedido");
          let descripcion = pedido.querySelector(".descripcion-extra");
    
          if (!descripcion) {
            descripcion = document.createElement("p");
            descripcion.classList.add("descripcion-extra");
            descripcion.textContent = "Descripción del pedido: Ilustración personalizada con estilo surrealista y paleta de colores pastel. Entrega digital.";
            pedido.querySelector(".pedido-info").appendChild(descripcion);
            btn.textContent = "Ocultar detalles";
          } else {
            descripcion.remove();
            btn.textContent = "Ver detalles";
          }
        });
      });
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
