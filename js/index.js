const estilos = document.documentElement.style;
const carousel = document.querySelectorAll('.imgs-container');
const puntos = document.querySelectorAll('.puntos li');
/* ------- Slider automatico cada cierto tiempo ------- */
let contador = 0;
setInterval(() => {
    contador++;
    puntos.forEach(li => {
        li.classList.remove("li_activo");
    });
    const traslacion = -10*contador;
        estilos.setProperty("--traslacion", traslacion + "%")
        puntos[contador].classList.add("li_activo");
        if(contador == puntos.length-1){
            contador=-1;

        }
}, 30000)

/* ------- Slider manual con puntos ------- */
puntos.forEach((li, indice) => {
    li.addEventListener("click", () => {
        puntos.forEach(li => {
            li.classList.remove("li_activo");
        })
        const traslacion = -10*indice;
        estilos.setProperty("--traslacion", traslacion + "%")
        li.classList.add("li_activo");
        contador = indice;
    })
})

