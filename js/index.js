const estilos = document.documentElement.style;
const carousel = document.querySelectorAll('.content');
const puntos = document.querySelectorAll('.puntos li');
/* ------- Slider automatico cada cierto tiempo ------- */
let contador = 0;

const slider_automatico = () => {
    estilos.setProperty("--transicion", "all 1s ease")
    contador++;
    if(contador === puntos.length){
        contador=0;
        estilos.setProperty("--transicion", "none")
    }
    puntos.forEach(li => {
        li.classList.remove("li_activo");
    });

    const traslacion = -100*contador;
    console.log(traslacion)
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
        const traslacion = -100*indice;
        estilos.setProperty("--traslacion", traslacion + "%")
        li.classList.add("li_activo");
        contador = indice;
        clearInterval(intervalo);
        intervalo = setInterval(slider_automatico, 3000);
    });
});

