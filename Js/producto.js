const cardContainer = document.getElementById('card-container');

const productopeticion = async () => {
    const resultado = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Maybelline");
    const datos = await resultado.json();
    const data = datos.results; // Accede a los productos correctamente

    for (let item of data) { // Se declara "let" para la variable "item"
        const card = document.createElement('div');
        card.className = 'card';

        const productoImagen = document.createElement('img');
        productoImagen.src = item.thumbnail; // Asegúrate de usar "thumbnail" que es parte de la API
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
            agregarAlCarrito(item); // Usar "item" que es el producto actual
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

function actualizarCarritoIcono() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoDeCompras = document.querySelector('#carritoDeCompras img');

    if (Object.keys(carrito).length > 0) {
        carritoDeCompras.src = './recursos/carrito-de-compras-1.png';
    } else {
        carritoDeCompras.src = './recursos/carrito-de-compras.png';
    }
}
document.addEventListener('DOMContentLoaded', mostrarCarrito);

function agregarAlCarrito(item) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    if (carrito[item.id]) {
        carrito[item.id].cantidad += 1;
    } else {
        carrito[item.id] = { ...item, cantidad: 1 };
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    Toastify({
        text: `${item.title} se añadió al carrito`,
        duration: 3000,
        style: {
            background: "black", 
            color: "white", 
        }
    }).showToast();

    actualizarCarritoIcono(); 
}

