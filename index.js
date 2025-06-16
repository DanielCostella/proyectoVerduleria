
function retornarCardHTML(producto) {
    return `
        <div class="card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <button id="${producto.id}">Agregar al carrito</button>
        </div>
    `;
}


function cargarProductos(array) {
    const contenedor = document.querySelector('.container'); // Referencia al contenedor
    contenedor.innerHTML = ''; // Limpiar contenido previo

    array.forEach(producto => {
        contenedor.innerHTML += retornarCardHTML(producto); // Agregar cada producto
    });
}

// Ejecutar la función con el array de productos
cargarProductos(productos);