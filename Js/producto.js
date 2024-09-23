const cardContainer = document.getElementById('card-container');

const productopeticion = async () => {
    const resultado = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Maybelline");
    const datos = await resultado.json();
    const data = datos.results;

    for (let item of data) {
        const card = document.createElement('div');
        card.className = 'card';

        const productoImagen = document.createElement('img');
        productoImagen.src = item.thumbnail;
        productoImagen.alt = "Imagen de productos";

        const productoNombre = document.createElement('h3');
        productoNombre.innerHTML = item.title;

        const productoPrecio = document.createElement('p');
        productoPrecio.innerHTML = `Precio: $${item.price}`;

        const productoTone = document.createElement('p');
        productoTone.innerHTML = `Proveedor: ${item.official_store_name}`;

        const productoStock = document.createElement('p');
        productoStock.innerHTML = `Stock disponible: ${item.available_quantity}`;

        const button = document.createElement('button');
        button.innerHTML = "Comprar ahora";
        button.className = "botonCard";
        button.addEventListener('click', function () {
            agregarAlCarrito(item);
        });

        card.appendChild(productoNombre);
        card.appendChild(productoImagen);
        card.appendChild(productoPrecio);
        card.appendChild(productoTone);
        card.appendChild(productoStock);
        card.appendChild(button);
        cardContainer.appendChild(card);
    }
};

productopeticion();

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoContainer = document.getElementById('productosCarrito');
    const noproducto = document.getElementById('noproducto');

    carritoContainer.innerHTML = '';

    if (Object.keys(carrito).length === 0) {
        noproducto.style.display = 'block';
    } else {
        noproducto.style.display = 'none';
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

    actualizarCarritoIcono();
}

function actualizarCarritoIcono() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoDeCompras = document.querySelector('#carritoDeCompras img');

    if (Object.keys(carrito).length > 0) {
        carritoDeCompras.src = './recursos/carrito-de-compras-1.png';
    } else {
        carritoDeCompras.src = './recursos/carrito-de-compras.png';
    }
}
function agregarAlCarrito(item) {
    const nombreUsuario = localStorage.getItem('nombre');
    const passwordUsuario = localStorage.getItem('password');

    // Verificar si el usuario ha iniciado sesión
    if (!nombreUsuario || !passwordUsuario) {
        Toastify({
            text: "Debes iniciar sesión antes de agregar productos al carrito.",
            duration: 3000,
            style: {
                background: "red",
                color: "white",
            }
        }).showToast();
        return;  // Salir de la función si no ha iniciado sesión
    }

    // Si ha iniciado sesión, agregar producto al carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    if (carrito[item.id]) {
        carrito[item.id].cantidad += 1;
    } else {
        carrito[item.id] = { ...item, cantidad: 1 };
    }

    const tituloMenosLetras = item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title;
    localStorage.setItem('carrito', JSON.stringify(carrito));

    Toastify({
        text: `${tituloMenosLetras} se añadió al carrito`,
        duration: 3000,
        style: {
            background: "black",
            color: "white",
        }
    }).showToast();

    actualizarCarritoIcono();
}


document.addEventListener('DOMContentLoaded', function () {
    mostrarCarrito();
    actualizarCarritoIcono();
});

