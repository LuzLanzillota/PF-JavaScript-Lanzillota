// Clase Usuario
class Usuario {
    constructor(nombre, password, rol) {
        this.nombre = nombre;
        this.password = password;
        this.rol = rol;
    }
}

// Crear instancias de los usuarios
const usuarioAdmin = new Usuario('Luz', '1234', 'admin');
const usuarioCompra = new Usuario('Sol', '5678', 'compra');

// Manejar el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;

    // Guardar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('password', password);

    // Mostrar los valores ingresados en el DOM
    document.getElementById('Nombre').textContent = 'Nombre: ' + nombre;
    document.getElementById('Contraseña').textContent = 'Contraseña: ' + password;

    // Ejecutar el login
    login();
});

function login() {
    const storedUser = localStorage.getItem('nombre');
    const storedPassword = localStorage.getItem('password');

    const mensajeDiv = document.getElementById('mensaje');
    const volver = document.getElementById('volverHome');
    volver.innerHTML = "";  // Limpiar contenido previo

    // Verificar si las credenciales coinciden con los usuarios existentes
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

// Función para crear el botón de volver al inicio
function crearBotonVolver(volver) {
    const buttonHome = document.createElement('button');
    buttonHome.textContent = "Volver al inicio";
    buttonHome.classList.add('botonVolver');
    buttonHome.addEventListener('click', function () {
        window.location.href = "./index.html";
    });
    volver.appendChild(buttonHome);
}
