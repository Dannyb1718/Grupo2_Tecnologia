## Artdays - Plataforma para artistas
Artdays es un sitio web pensado para la comunidad artística, donde los usuarios pueden compartir sus obras, recibir comisiones y visualizar el trabajo de otros artistas. 
La estructura del proyecto está organizada por carpetas, cada una correspondiente a una sección específica del sitio, con sus respectivos archivos HTML, CSS y JS.

La única parte que no está dentro de una carpeta es la página principal, que contiene los archivos:index.html, style.css JavaScript.js.

## Estructura General del Proyecto

Excepto la página principal, **todas las demás secciones** están organizadas en **carpetas separadas**. 
Dentro de cada carpeta, los archivos suelen tener nombres similares al nombre de la carpeta o de la funcionalidad.

Cada página cuenta con:

- .html: estructura de contenido y llamadas `onclick` a funciones de JS.
- .css: apariencia visual, efectos y diseño responsive.
- .js: funciones interactivas como redirecciones, eventos y animaciones.

## Página Principal (Raíz del Proyecto)

Archivos:

- index.html: página de inicio.
- style.css: estilos generales.
- JavaScript.js: contiene dos funciones principales:
  - Redirección al hacer clic en elementos del header.
  - Funcionamiento del carrusel de imágenes (slider).
  - redirección del menú hamburgues

## Subir Portafolio (/SubirPort)

- portfol.html: formulario para subir trabajos artísticos.
- portfol.css: apariencia de botones, inputs y estructura.
- portfol.js: contiene solo redirección del menú hamburguesa y paginas del header.

## Perfiles (/perfiles)

Contiene subcarpetas:

- /mperfil: información general del perfil.
- /Configperfil: configuración del perfil.
- /eliminarperf: opción para eliminar el perfil.
- /trasenaperfil: cambio de contraseña.

Cada carpeta contiene sus archivos .html,.css y .js.  
Detalles importantes:
- El HTML contiene una función al final para resaltar visualmente la sección activa (por ejemplo: eliminar, configurar).
- 
## Soporte (/pagina soporte)

- soporteP.html, soporteP.css, soporteP.js
- El archivo .js incluye:
  - Despliegue de preguntas frecuentes con flechas.
  - Simulación de un chatbot.

## Carrito de Compras (/pagina carrito)

- carrito.html, carrito.css, carrito.js
- En carrito.js:
  - Se suman o eliminan productos.
  - Se actualiza el precio en tiempo real.
  - Se manejan eventos al presionar botones.

## Modelado y Dibujo
### Carpetas:
- /Modelado A: muestra de animaciones 3D.
- /Modelado: sección de modelado 3D.
- /dibujotrad: dibujo tradicional.
- /dibujodig: dibujo digital.

Cada carpeta contiene:
- HTML con estructura de la sección.
- CSS para la presentación visual.
- JS con funciones específicas: hay una función especial que al seleccionar una imagen muestra un mensaje indicando que habrá más detalles en el futuro.

## Mis Pedidos (/MisPedidos)

- pedidos.html, pedidos.css, pedidos.js
- JavaScript con funciones para:
  - Ver más detalles de un pedido.
  - Cancelar un pedido (simulado bajando su opacidad).

## Iniciar Sesión (/IniciarSes)

- InicioSesion.html, InicioSesion.css, InicioSesion.js
- JS simula inicio de sesión con validación básica o mensaje de éxito.

## Crear Cuenta (/CrearCuen)

- Contiene CrearC.html, CrearC.css
- Esta es de las pocas páginas que no incluye archivo JavaScript.

## Galería de Arte (/DaleriaDeArt)

- Galart.html, Galart.css, Galart.js
- Visualización de perfiles y portafolios de artistas.
- Funcionamiento similar a las páginas de dibujo (dibujotrad, etc.).

## Descripción por tipo de archivo

### .html
- Contiene la estructura de cada sección.
- Incluye clases, IDs y atributos `onclick` para enlazar con funciones de JS.
- Algunos elementos específicos, como el resaltado de botones activos, se encuentran incrustados directamente en este archivo.

### .css
- Define los estilos visuales y apariencia del sitio.
- Aplica efectos como hover, contornos, transiciones.
- Usa media queries para que la web sea responsive en diferentes tamaños de pantalla.

### .js
- Maneja las funciones interactivas del sitio.
- Redireccionamiento entre páginas.
- Eventos dinámicos (como sliders, añadir al carrito, preguntas desplegables, etc).
- 
## Imágenes
Cada carpeta contiene su propia subcarpeta de imágenes que alimentan visualmente las secciones correspondientes del sitio.
