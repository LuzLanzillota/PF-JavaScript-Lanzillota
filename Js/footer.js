const footer = document.getElementById('footer');
const p = document.createElement('p');
footer.appendChild(p);
const anioActual = new Date().getFullYear();
p.innerHTML = "Maybelline" + " - " + anioActual;
