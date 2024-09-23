class Usuario {
    constructor(nombre, password, rol) {
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
    }
}
const usuarioAdmin = new Usuario('Luz', '1234', 'admin');
const usuarioCompra = new Usuario('Sol', '5678', 'compra');

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('password', password);
    document.getElementById('Nombre').textContent = 'Nombre: ' + nombre;
    document.getElementById('Contraseña').textContent = 'Contraseña: ' + password;
    login();
});
function login() {
    const storedUser = localStorage.getItem('nombre');
    const storedPassword = localStorage.getItem('password');

    const mensajeDiv = document.getElementById('mensaje');
    const volver = document.getElementById('volverHome');
    volver.innerHTML = "";  
    if (storedUser === usuarioAdmin.nombre && storedPassword === usuarioAdmin.password) {
        mensajeDiv.textContent = `Bienvenida, ${usuarioAdmin.nombre}`;
        mensajeDiv.style.color = 'green';
        crearBotonVolver(volver);
    } else if (storedUser === usuarioCompra.nombre && storedPassword === usuarioCompra.password) {
        mensajeDiv.textContent = `Bienvenida de vuelta, ${usuarioCompra.nombre}`;
        mensajeDiv.style.color = 'green';
        crearBotonVolver(volver);
    } else {
        mensajeDiv.textContent = "Nombre de usuario o contraseña incorrectos";
        mensajeDiv.style.color = 'red';
    }
}
function crearBotonVolver(volver) {
    const buttonHome = document.createElement('button');
    buttonHome.textContent = "Volver al inicio";
    buttonHome.classList.add('botonVolver');
    buttonHome.addEventListener('click', function () {
        window.location.href = "./index.html";
    });
    volver.appendChild(buttonHome);
}