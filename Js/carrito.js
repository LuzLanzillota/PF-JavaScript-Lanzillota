function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoContainer = document.getElementById('productosCarrito');

    carritoContainer.innerHTML = ''; 

    if (Object.keys(carrito).length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío</p>';
        return;
    }

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

        productoDiv.appendChild(productoImagen);
        productoDiv.appendChild(productoNombre);
        productoDiv.appendChild(productoCantidad);
        productoDiv.appendChild(productoPrecio);
        productoDiv.appendChild(eliminarButton);

        carritoContainer.appendChild(productoDiv);
    }
}

function eliminarProductoDelCarrito(productoId) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    if (carrito[productoId]) {
        delete carrito[productoId];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito(); 
        actualizarCarritoIcono();  
    }
}
