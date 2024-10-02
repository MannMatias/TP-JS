//LocalStorage
//1.
// Elementos del DOM
const form = document.getElementById('formCorreo');
const correoInput = document.getElementById('correo');
const correoGuardadoDiv = document.getElementById('correoGuardado');
const mostrarCorreo = document.getElementById('mostrarCorreo');
const eliminarBtn = document.getElementById('eliminarCorreo');

// Función para mostrar el correo guardado si existe
function mostrarCorreoGuardado() {
    const correo = localStorage.getItem('correo');
    if (correo) {
        mostrarCorreo.textContent = correo;
        correoGuardadoDiv.style.display = 'block';
    } else {
        correoGuardadoDiv.style.display = 'none';
    }
}

// Al cargar la página, verificamos si ya hay un correo guardado
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);

// Evento para guardar el correo en localStorage
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const correo = correoInput.value;
    if (correo) {
        localStorage.setItem('correo', correo);
        mostrarCorreoGuardado();
    }
});

// Evento para eliminar el correo guardado
eliminarBtn.addEventListener('click', function() {
    localStorage.removeItem('correo');
    mostrarCorreoGuardado();
});