let precioproducto = 10.500;
let descuento = 0.15;
const titulo2 = document.createElement("h1");
const titulo = document.createElement("h2")
const main = document.getElementsByTagName("main");
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = i => i * 0.21;


function conmutador(tipo_usuario) {

    if (tipo_usuario === "Admin") {
        let opcion = parseInt(prompt("Ingrese una opción: 1. Mostrar Productos, 2. Agregar Stock, 3. Agregar Producto, 4. Eliminar Producto, 5.Salir"));
        switch (opcion) {
            case 1:
                mostarProductos();
                break;
            case 2:
                agregarStock();
                break;
            case 3:
                agregarProducto();
                break;
            case 4:
                eliminarProducto();
                break;
            case 5:
                console.log("Saliendo del programa")
                break;
            default:
                console.log("No es una opcion valida");
                break;
        }
    } else if (tipo_usuario === "Comprador") {
        let opcion = parseInt(prompt("Ingrese una opción: 1. Mostrar Productos, 2.Comprar, 3.Salir"));
        switch (opcion) {
            case 1:
                mostarProductos();
                break;
            case 2:
                precioMasIva();
                break;
            case 3:
                console.log("Saliendo del programa")
                break;
            default:
                console.log("No es una opcion valida");
                break;
        }
    }
}
function mostarProductos() {
    console.log("Mostrando productos:");
    console.log(producto);
}
function agregarStock() {
    const idProducto = parseInt(prompt("Ingrese el ID del producto al que desea agregar stock:"));
    if (isNaN(idProducto) || idProducto < 0) {
        console.log("ID inválido. No se realizó ninguna acción.");
        return;
    }
    const productoSeleccionado = producto.find(p => p.id === idProducto);
    if (!productoSeleccionado) {
        console.log("Producto no encontrado.");
        return;
    }
    let cantidadStock = parseFloat(prompt("Ingrese el nuevo stock"));
    if (isNaN(cantidadStock) || cantidadStock < 0) {
        console.log("Cantidad de stock inválida. No se agregó ningún stock.");
        return;
    }
    productoSeleccionado.stock += cantidadStock;
    console.log(`Stock actualizado del producto con ID ${productoSeleccionado.id}:`);
    console.log(`ID: ${productoSeleccionado.id}, Nombre: ${productoSeleccionado.nombre}, Stock: ${productoSeleccionado.stock}`);
}
function agregarProducto() {
    let nombreProductoNuevo = prompt("Ingrese el nombre del nuevo producto ");
    let precioProductoNuevo = parseFloat(prompt("Ingrese el precio del nuevo producto"));
    let tonoProductoNuevo = prompt("Ingrese el o los tonos del nuevo producto");
    let stockProductoNuevo = parseFloat(prompt("Ingrese el número de stock del nuevo producto"));
    let descripcionProductoNuevo = prompt("Ingrese la descripción del nuevo producto");
    const producto11 = new Productos(nombreProductoNuevo, precioProductoNuevo, tonoProductoNuevo, stockProductoNuevo, descripcionProductoNuevo);
    console.log("Agregando Producto");
    producto.push(producto11);
    console.log(producto);
}
function eliminarProducto() {
    console.log(producto);
    const idAEliminar = parseFloat(prompt("Ingrese el número de ID del producto que desea eliminar:"));
    if (isNaN(idAEliminar) || idAEliminar < 0 || idAEliminar >= producto.length) {
        console.log("Índice inválido. No se eliminó ningún producto.");
    } else {
        const productoEliminado = producto.splice(idAEliminar, 1);
        console.log(`Producto con el ID ${idAEliminar} eliminado.`);
    }
}
function precioMasIva() {
    let precioproducto = parseFloat(prompt("Ingrese el precio del producto que desea comprar"));
    let descuentoAplicado = precioproducto * descuento;
    let nuevoprecio = resta(suma(precioproducto, iva(precioproducto)), descuentoAplicado);
    console.log("El total es $ " + nuevoprecio);
}

const indextitulo = document.getElementById('indextitulo');
if (indextitulo) {
    const nuevoH2 = document.createElement("h2");
    nuevoH2.innerHTML = "Nuevos ingresos";
    indextitulo.appendChild(nuevoH2);
}

