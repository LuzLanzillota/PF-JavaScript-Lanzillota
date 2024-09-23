main[0].appendChild(titulo);
const header = document.querySelector('#header');
const div = document.createElement('div');
const a = document.createElement('a');
const img = document.createElement('img');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const index = document.getElementById('index');
const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "producto",
        nombre: "Productos"
    },
    {
        link: "contact",
        nombre: "Contacto"
    }
];
header.appendChild(div);
div.appendChild(a);
a.appendChild(img);
header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
a.href = "./index.html";
img.src = "./recursos/maybelline.png";
img.alt = "Logotipo de Maybelline";
img.style.height = '50px';
document.body.style.fontSize = '100%';
navegacion.className = "navbar";
for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}

enlaces.forEach(enlace => {
    const element = document.getElementById(enlaces.link);
    if (element) {
        element.style.margin = '0 .8rem';
    }
})

