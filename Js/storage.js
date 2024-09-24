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

window.onload = function () {
    const storedUser = localStorage.getItem('nombre');
    if (storedUser) {
        mostrarBotonesSesion(storedUser);
    }
};

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;

    document.getElementById('nombre').value = '';
    document.getElementById('password').value = '';

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
        mostrarBotonesSesion(user.nombre);
    } else {
        mensajeDiv.textContent = "Nombre de usuario o contraseña incorrectos";
        mensajeDiv.style.color = 'red';
        volver.innerHTML = ""; 
    }
}

function mostrarBotonesSesion(nombreUsuario) {
    const volver = document.getElementById('volverHome');
    volver.innerHTML = ""; 

    crearBotonVolver(volver);
    crearBotonLogout(volver);
}

function crearBotonVolver(volver) {
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

function crearBotonLogout(volver) {
    if (!document.querySelector('.botonLogout')) {
        const buttonLogout = document.createElement('button');
        buttonLogout.textContent = "Cerrar sesión";
        buttonLogout.classList.add('botonLogout');
        buttonLogout.addEventListener('click', function () {
            localStorage.removeItem('nombre');
            localStorage.removeItem('password');
            document.getElementById('mensaje').textContent = "Has cerrado sesión.";
            document.getElementById('mensaje').style.color = 'red';
            volver.innerHTML = "";
        });
        volver.appendChild(buttonLogout);
    }
}
