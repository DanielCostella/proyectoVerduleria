// Conectar con el tbody de la tabla
const tbody = document.querySelector('#tabla-carrito tbody');

// Función para recuperar el carrito desde LocalStorage
function recuperarCarrito() {
    const carritoGuardado = localStorage.getItem("carritoFrutas");
    return JSON.parse(carritoGuardado) || [];
}

// Función que retorna una fila de tabla con los datos del producto
function retornarTablaHTML(producto) {
    return `
        <tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><button class="quitar-btn" data-id="${producto.id}">Quitar</button></td>
        </tr>
    `;
}

// Mostrar los productos del carrito en la tabla
function mostrarCarritoEnTabla() {
    tbody.innerHTML = ""; // Vaciar el cuerpo de la tabla
    const carritoFrutas = recuperarCarrito();
    if (carritoFrutas.length > 0) {
        carritoFrutas.forEach(producto => {
            tbody.innerHTML += retornarTablaHTML(producto);
        });
    }
}

// Ejecutar al cargar la página
mostrarCarritoEnTabla();

// Quitar producto del carrito
function quitarDelCarrito(indice) {
    carritoFrutas.splice(indice, 1); // Elimina el producto del array
    almacenarCarrito(); // Actualiza el localStorage
    mostrarCarritoEnTabla(); // Refresca la tabla
}

// Mostrar el carrito al cargar la página
mostrarCarritoEnTabla();

// Funcionalidad del botón COMPRAR
const comprarBtn = document.getElementById('comprar-btn');

comprarBtn.addEventListener('click', () => {
    // Mensaje de agradecimiento
    alert('¡Gracias por tu compra! Pronto recibirás tu pedido.');
    // Vaciar carrito en LocalStorage
    localStorage.removeItem('carritoFrutas');
    // Vaciar la tabla HTML
    tbody.innerHTML = '';
});

// Delegación de eventos para quitar productos individualmente
tbody.addEventListener('click', function(event) {
    if (event.target.classList.contains('quitar-btn')) {
        const idAEliminar = parseInt(event.target.getAttribute('data-id'));
        let carritoFrutas = recuperarCarrito();
        carritoFrutas = carritoFrutas.filter(producto => producto.id !== idAEliminar);
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas));
        mostrarCarritoEnTabla();
    }
}); 