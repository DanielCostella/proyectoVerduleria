
// ✅ Paso 4: Función para recuperar el carrito desde LocalStorage
function recuperarCarrito() {
    const carritoGuardado = localStorage.getItem("carritoFrutas");
    return JSON.parse(carritoGuardado) || []; // Si no hay nada, retorna []
}

// ✅ Paso 5: Crear la constante carritoFrutas con lo recuperado
const carritoFrutas = recuperarCarrito(); // Se carga con lo guardado o vacío

// ✅ Paso 2: Función para almacenar el carrito en LocalStorage
function almacenarCarrito() {
    carritoFrutas.length > 0 && localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
    // Alternativa con if:
    // if (carritoFrutas.length > 0) {
    //     localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
    // }
}

// ✅ Paso 3: Función para agregar productos al carrito
const agregarAlCarrito = (frutaId) => {
    if (frutaId > 0) {
        const productoSeleccionado = productos.find(p => p.id === frutaId);

        if (productoSeleccionado !== undefined) {
            carritoFrutas.push(productoSeleccionado);
            almacenarCarrito(); // ✅ Guarda bien el objeto completo
            console.log(carritoFrutas); // 👈 Mostrar el array actualizado en consola
        }
    }
};