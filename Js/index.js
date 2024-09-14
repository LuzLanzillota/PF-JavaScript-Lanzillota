let precioproducto = 10.500;
let descuento = 0.15;
const titulo2 = document.createElement("h1");
const titulo = document.createElement("h2")
const main = document.getElementsByTagName("main");
const indextitulo = document.getElementById('indextitulo');
if (indextitulo) {
    const nuevoH2 = document.createElement("h2");
    nuevoH2.innerHTML = "Nuevos ingresos";
    indextitulo.appendChild(nuevoH2);
    
}

