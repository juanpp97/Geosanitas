const form = document.querySelector('#form')
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const ciudad = document.querySelector('#ciudad');
const correo = document.querySelector('#correo');
const comentario = document.querySelector('#comentario');
const mensaje = document.querySelector('#mensaje');
const estilos = document.documentElement.style;
let inError = false;
const cambiarFondo = (error) => {
    if (error) {
        estilos.setProperty("--fondo-msg", "rgb(255, 0, 0, 0.2)");
        estilos.setProperty("--color-msg", "#F00")
        mensaje.style.display = "block";
        mensaje.style.opacity = 1;
    } else {
        estilos.setProperty("--fondo-msg", "rgb(0, 255, 0, 0.2)");
        estilos.setProperty("--color-msg", "#004173")
        mensaje.style.display = "block";
        mensaje.style.opacity = 1;

    }

}

const inputError = (error, atributo) => {
    error 
    ? atributo.setAttribute("id", "error_form")
    : atributo.removeAttribute("id", "error_form");
}

function envio(event) {
    event.preventDefault();
    let valorNombre = nombre.value;
    let valorApellido = apellido.value;
    let valorCiudad = ciudad.value;
    let valorCorreo = correo.value;
    let valorComentario = comentario.value;
    /* Validación de campos vacios */

    if (valorNombre === "" || valorApellido === "" || valorCiudad === "" || valorCorreo === "" || valorComentario === "") {
        inputError(valorNombre === "", nombre);
        inputError(valorApellido === "", apellido);
        inputError(valorCiudad === "", ciudad);
        inputError(valorCorreo === "", correo);
        inputError(valorComentario === "", comentario);
        mensaje.innerHTML = "<b>Error:</b>Todos los campos son obligatorios";
        cambiarFondo(true);
        temp = setTimeout(() => {
            mensaje.style.opacity = 0;
            temp = setTimeout(() => {
                mensaje.style.display = "none";
            }, 700);
        }, 3000);
        return;
    }
    /* Validación del nombre */
    for (let i = 0; i < valorNombre.length; i++) {
        /* Verifico que solo sean letras */
        const charCode = valorNombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
            clearTimeout(temp);
            mensaje.innerHTML = "<b>Error:</b> El nombre solo puede contener letras";
            cambiarFondo(true);
            nombre.setAttribute("id", "error_form")
            temp = setTimeout(() => {
                mensaje.style.opacity = 0;
                temp = setTimeout(() => {
                    mensaje.style.display = "none";
                }, 700);
            }, 3000);
            return;
        }
    }
}

form.addEventListener("submit", envio)
