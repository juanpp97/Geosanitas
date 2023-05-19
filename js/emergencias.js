const buscador = document.querySelector("#buscador");
const titulo = document.querySelectorAll(".sub-item h3");


buscador.addEventListener("keyup", () => {
    titulo.forEach((valor, i) => {
        valor.textContent.toLowerCase().includes(buscador.value.toLowerCase())
            ? titulo[i].parentElement.parentElement.classList.remove("filtro")
            : titulo[i].parentElement.parentElement.classList.add("filtro")
    })
});