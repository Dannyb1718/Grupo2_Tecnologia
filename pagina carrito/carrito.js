const listaProductos = document.getElementById("listaProductos");
const total = document.getElementById("total");

let carrito = [
  {
    id: 1,
    nombre: "Ilustración Fantasía",
    precio: 30000,
    imagen: "img1.jpg"
  },
  {
    id: 2,
    nombre: "Retrato Digital",
    precio: 45000,
    imagen: "img2.jpg"
  }
];

// Función para renderizar productos
function renderizarCarrito() {
  listaProductos.innerHTML = "";
  let totalPrecio = 0;

  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <div class="producto-info">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <div>
          <h4>${producto.nombre}</h4>
          <p class="producto-precio">$${producto.precio}</p>
        </div>
      </div>
      <button class="btn-eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;

    listaProductos.appendChild(div);
    totalPrecio += producto.precio;
  });

  total.textContent = totalPrecio;
}

// Eliminar producto
function eliminarProducto(id) {
  carrito = carrito.filter(prod => prod.id !== id);
  renderizarCarrito();
}

// Inicial
renderizarCarrito();


  // Menú hamburguesa
  const hamburguesa = document.getElementById("hamburguesa");
  const menu = document.getElementById("elementos-menu");
  
  hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });