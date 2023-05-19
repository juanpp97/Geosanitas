const form = document.querySelector('#form')
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const ciudad = document.querySelector('#ciudad');
const correo = document.querySelector('#correo');
const comentario = document.querySelector('#comentario');
const mensaje = document.querySelector('#mensaje');
const estilos = document.documentElement.style;
const contador = document.querySelector(".word-counter")
console.log(contador)
/* Defino numero máximo de palabras del comentario */
const maxLength = 2000;
comentario.maxLength = maxLength;
contador.innerHTML = maxLength
let temp;

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

const temporizacion = () => {
    temp = setTimeout(() => {
        mensaje.style.opacity = 0;
        temp = setTimeout(() => {
            mensaje.style.display = "none";
        }, 700);
    }, 3000);
}
const contieneLetras = (valorInput) => {
    for (let i = 0; i < valorInput.length; i++) {
        /* Verifico que solo sean letras (incluyo ñ y espacio) */
        const charCode = valorInput.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 241 || charCode === 209 || charCode === 32)) {
            return false;
        }
    }
    return true;
}
comentario.addEventListener("input", () => {
    /* Si se excede del número máximo de caracteres lo indica en pantalla */
    contador.innerHTML = maxLength - comentario.value.length;
    if (comentario.value.length > maxLength) {
        inputError(true, comentario);
        contador.style.color = "#f00";
        contador.innerHTML = "0";
        mensaje.innerHTML = "<b>Error:</b>Se superó el número de caracteres del comentario";
        cambiarFondo(true);
    } else {
        inputError(false, comentario);
        contador.style.color = "#aaa";
        mensaje.style.display = "none";
    }
});

async function envio(event) {
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
        mensaje.innerHTML = "<b>Error:</b>Complete todos los campos antes de enviar";
        cambiarFondo(true);
        clearTimeout(temp);
        temporizacion();
        return;
    }
    inputError(valorNombre === "", nombre);
    inputError(valorApellido === "", apellido);
    inputError(valorCiudad === "", ciudad);
    inputError(valorCorreo === "", correo);
    inputError(valorComentario === "", comentario);

    /* Validación del nombre */
    if (!contieneLetras(valorNombre)) {
        clearTimeout(temp);
        mensaje.innerHTML = "<b>Error:</b>El Nombre solo puede contener letras";
        cambiarFondo(true);
        inputError(true, nombre);
        temporizacion();
        return;
    }

    inputError(false, nombre);

    /* Validación de apellido */
    if (!contieneLetras(valorApellido)) {
        clearTimeout(temp);
        mensaje.innerHTML = "<b>Error:</b>El Apellido solo puede contener letras";
        cambiarFondo(true);
        inputError(true, apellido);
        temporizacion();
        return;
    }
    inputError(false, apellido);

    /* Validación de la ciudad */
    if (!contieneLetras(valorCiudad)) {
        clearTimeout(temp);
        mensaje.innerHTML = "<b>Error:</b> La Ciudad solo puede contener letras";
        cambiarFondo(true);
        inputError(true, ciudad);
        temporizacion();
        return;
    }

    inputError(false, ciudad);

    /* Validación del correo */
    if (!(valorCorreo.includes("@"))) {
        clearTimeout(temp);
        mensaje.innerHTML = "<b>Error:</b> El correo debe contener el caracter @";
        cambiarFondo(true);
        inputError(true, correo);
        temporizacion();
        return;
    } else {
        let correo = valorCorreo.split("@");
        /* Verifico que el correo no contenga caracteres invalidos */
        if (correo[0].includes("(") || correo[0].includes(")") || correo[0].includes("<") || correo[0].includes(">") || correo[0].includes(",") || correo[0].includes(";") || correo[0].includes(":") || correo[0].includes("[") || correo[0].includes("]") || correo[0].includes("{") || correo[0].includes("}") || correo[0].includes("%") || correo[0].includes("&") || !(correo[1].includes("."))) {
            clearTimeout(temp);
            mensaje.innerHTML = "<b>Error:</b> El correo contiene caracteres no validos";
            cambiarFondo(true);
            inputError(true, correo);
            temporizacion();
            return;
        }
    }
    inputError(false, correo);

    /* Verifico que el comentario no exceda el número máximo de caracteres */
    if (valorComentario.length > maxLength) {
        clearTimeout(temp);
        mensaje.innerHTML = "<b>Error:</b> El comentario excede el número máximo de caracteres";
        cambiarFondo(true);
        inputError(true, comentario);
        temporizacion();
        return;
    }
    inputError(false, comentario);

    let datosForm = new FormData(this);
    fetch(this.action, {
        method: this.method,
        body: datosForm,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            mensaje.innerHTML = "El formulario ha sido enviado correctamente. Gracias por contactarte con nosotros!";
            cambiarFondo(false);
            temporizacion();
            form.reset();
            contador.innerHTML = maxLength
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    mensaje.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    cambiarFondo(true);

                } else {
                    mensaje.innerHTML = "<b>Error:</b> Ha habido un error en el envio del formulario";
                    cambiarFondo(true);
                }
            })
        }
    }).catch(error => {
        mensaje.innerHTML = "<b>Error:</b> Ha habido un error en el envio del formulario";
    });



}








form.addEventListener("submit", envio)
