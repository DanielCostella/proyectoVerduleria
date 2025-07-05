
<<<<<<< HEAD
const productos = [];
const URL = "productos.json";

function retornarCardHTML(producto) {
    // Usar rutas a la carpeta imagenes
    const imagenUrl = `imagenes/${producto.imagen}`;
    
    return `
        <div class="card">
            <img src="${imagenUrl}" alt="${producto.nombre}">
=======
function retornarCardHTML(producto) {
    return `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
>>>>>>> 5d2bfa121c5b5de8953ad6690d66a39e8d23a6c9
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <button id="${producto.id}">Agregar al carrito</button>
        </div>
    `;
}

<<<<<<< HEAD
=======

>>>>>>> 5d2bfa121c5b5de8953ad6690d66a39e8d23a6c9
function cargarProductos(array) {
    const contenedor = document.querySelector('.container'); // Referencia al contenedor
    contenedor.innerHTML = ''; // Limpiar contenido previo

    array.forEach(producto => {
        contenedor.innerHTML += retornarCardHTML(producto); // Agregar cada producto
    });
<<<<<<< HEAD

    // ✅ Agregar event listeners a todos los botones después de crear las cards
    array.forEach(producto => {
        const boton = document.getElementById(producto.id);
        if (boton) {
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id);
                console.log(`Producto ${producto.nombre} agregado al carrito`);
            });
        }
    });
}

function obtenerProductos() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      productos.push(...data);
      cargarProductos(productos);
    })
    .catch(error => console.error("Error al cargar productos:", error));
}

obtenerProductos();
=======
}

// Ejecutar la función con el array de productos
cargarProductos(productos);
>>>>>>> 5d2bfa121c5b5de8953ad6690d66a39e8d23a6c9
