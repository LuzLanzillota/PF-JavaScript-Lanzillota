class Usuario {
    constructor(nombre, password, rol) {
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
    }
}

const Usuarios = [
    new Usuario('Luz', '1234', 'admin'),
    new Usuario('Sol', '5678', 'compra'),
];

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('password', password);
    login();
});

function login() {
    const storedUser = localStorage.getItem('nombre');
    const storedPassword = localStorage.getItem('password');
    const mensajeDiv = document.getElementById('mensaje');
    const volver = document.getElementById('volverHome');

    const user = Usuarios.find(u => u.nombre === storedUser && u.password === storedPassword);

    if (user) {
        mensajeDiv.textContent = `Bienvenida, ${user.nombre}`;
        mensajeDiv.style.color = 'green';
        crearBotonVolver(volver);
    } else {
        mensajeDiv.textContent = "Nombre de usuario o contraseña incorrectos";
        mensajeDiv.style.color = 'red';
        volver.innerHTML = ""; // Asegúrate de limpiar el botón si el login falla
    }
}

function crearBotonVolver(volver) {
    // Comprueba si el botón ya existe para evitar duplicados
    if (!document.querySelector('.botonVolver')) {
        const buttonHome = document.createElement('button');
        buttonHome.textContent = "Volver al inicio";
        buttonHome.classList.add('botonVolver');
        buttonHome.addEventListener('click', function () {
            window.location.href = "./index.html";
        });
        volver.appendChild(buttonHome);
    }
}
