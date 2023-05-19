const estilos = document.documentElement.style;
const carousel = document.querySelectorAll('.content');
const container = document.querySelector('.carousel');
const imagenes = document.querySelectorAll('.content img')
const puntos = document.querySelectorAll('.puntos li');
const descripcion = document.querySelectorAll('.description')
/* ------- Slider automatico cada cierto tiempo ------- */
let contador = 0;
const slider_automatico = () => {
    estilos.setProperty("--transicion", "all 1s ease")
    contador++;
    if (contador === puntos.length) {
        contador = 0;
        estilos.setProperty("--transicion", "none")
    }
    puntos.forEach(li => {
        li.classList.remove("li_activo");
    });
    const traslacion = -100 * contador;
    estilos.setProperty("--traslacion", traslacion + "%");
    puntos[contador].classList.add("li_activo");

}
let intervalo = setInterval(slider_automatico, 3000);

/* ------- Slider manual con puntos ------- */
puntos.forEach((li, indice) => {
    li.addEventListener("click", () => {
        puntos.forEach(li => {
            li.classList.remove("li_activo");
        })
        const traslacion = -100 * indice;
        estilos.setProperty("--traslacion", traslacion + "%")
        li.classList.add("li_activo");
        contador = indice;
        clearInterval(intervalo);
        intervalo = setInterval(slider_automatico, 3000);
    });
});
/* Manejo del hover de la descripcion del slider para que funcione en dispositivos moviles */
carousel.forEach((contenido, i) => {

    /* Cuando se presione en la imagen cambia su opacidad dependiendo de su valor actual */
    contenido.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const estilo = window.getComputedStyle(descripcion[i]);

        Number(estilo.getPropertyValue('opacity')) > 0.5
            ? descripcion[i].style.opacity = '0'
            : descripcion[i].style.opacity = '1';
    })
    /* Hago que el evento hover se haga desde JS para evitar conflictos con los estilos en linea definidos por JS */

    contenido.addEventListener("mouseover", () => {
        descripcion[i].style.opacity = '1';
    });
    contenido.addEventListener("mouseout", () => {
        descripcion[i].style.opacity = '0';
    });
})


