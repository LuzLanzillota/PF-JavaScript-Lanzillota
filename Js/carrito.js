function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoContainer = document.getElementById('productosCarrito');
    const noproducto = document.getElementById('noproducto');
    const totalCarrito = document.getElementById('totalCarrito');
    carritoContainer.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
        noproducto.style.display = 'block';
        totalCarrito.textContent = 'Total: $0';
    } else {
        noproducto.style.display = 'none';

        for (let id in carrito) {
            const producto = carrito[id];

            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto-carrito';

            const productoImagen = document.createElement('img');
            productoImagen.src = producto.thumbnail;
            productoImagen.alt = producto.title;

            const productoNombre = document.createElement('h3');
            productoNombre.textContent = producto.title;

            const productoCantidad = document.createElement('p');
            productoCantidad.textContent = `Cantidad: ${producto.cantidad}`;

            const productoPrecio = document.createElement('p');
            productoPrecio.textContent = `Precio: $${producto.price}`;

            const eliminarButton = document.createElement('button');
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.addEventListener('click', function () {
                eliminarProductoDelCarrito(id);
            });

            const productoDetalles = document.createElement('div');
            productoDetalles.className = 'producto-detalles';
            productoDetalles.appendChild(productoNombre);
            productoDetalles.appendChild(productoCantidad);
            productoDetalles.appendChild(productoPrecio);
            productoDetalles.appendChild(eliminarButton);

            productoDiv.appendChild(productoImagen);
            productoDiv.appendChild(productoDetalles);

            carritoContainer.appendChild(productoDiv);
        }

        // Actualizar el total en la interfaz
        const { total, precioIva } = calcularTotalCarrito();
        totalCarrito.textContent = `Total: $${total.toFixed(2)} (IVA incluido: $${precioIva.toFixed(2)})`; // Mostrar el total con IVA
        actualizarCarritoIcono();
    }
}

function eliminarProductoDelCarrito(productoId) {
    console.log('Eliminando producto:', productoId);
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    if (carrito[productoId]) {
        const productoEliminado = carrito[productoId].title;
        const tituloMenosLetras = productoEliminado.length > 20 ? productoEliminado.slice(0, 20) + '...' : productoEliminado;
        delete carrito[productoId];
        localStorage.setItem('carrito', JSON.stringify(carrito));

        mostrarCarrito();
        actualizarCarritoIcono();
    } else {
        tituloMenosLetras = 'Producto eliminado'
    }
    Toastify({
        text: `${tituloMenosLetras}`,
        duration: 3000,
        style: {
            background: "black",
            color: "white",
        }
    }).showToast();
}
function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    let total = 0;

    // Calcular el total
    for (let id in carrito) {
        const producto = carrito[id];
        total += producto.price * producto.cantidad;
    }

    // Calcular el total con IVA (21%)
    const precioIva = total * 1.21;

    // Retornar un objeto con ambos valores
    return {
        total,
        precioIva
    };
}
