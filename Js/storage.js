class Usuario {
    constructor(imagen, nombre, contraseña, rol) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.rol = rol;
    }
}
const Usuarios = [
    new Usuario("imagen", "María Luz Lanzillota", "1234", "Admin"),
    new Usuario("imagen", "María Sol Lanzillota", "5678", "Compra"),
    new Usuario("imagen", "Camila Urretabizcaya", "0987", "Admin"),
    new Usuario("imagen", "Silvia Noemi Casas", "4321", "Compra"),
]
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

    if (storedUser === usuarioAdmin && storedPassword === String(contrasenaAdmin)) {
        mensajeDiv.textContent = `Bienvenida, ${usuarioAdmin}`;
        mensajeDiv.style.color = 'green';
        const buttonHome = document.createElement('button');
        buttonHome.textContent = "Volver al inicio";
        buttonHome.classList.add('botonVolver');
        buttonHome.addEventListener('click', function () {
            window.location.href = "./index.html";
        });

        volver.appendChild(buttonHome);

    } else if (storedUser === usuarioCompra && storedPassword === String(contrasenaCompra)) {
        mensajeDiv.textContent = `Bienvenida de vuelta, ${usuarioCompra}`;
        mensajeDiv.style.color = 'green';
        const buttonHome = document.createElement('button');
        buttonHome.textContent = "Volver al inicio";
        buttonHome.classList.add('botonVolver');
        buttonHome.addEventListener('click', function () {
            window.location.href = "./index.html";
        });

        volver.appendChild(buttonHome);

    } else {
        mensajeDiv.textContent = "Nombre de usuario o contraseña incorrectos";
        mensajeDiv.style.color = 'red';
    }
}



