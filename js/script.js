/* --------------- Header ---------------*/
const link_header = document.querySelectorAll(".menu li a");

link_header.forEach((a) => {
    document.title.toLowerCase() === a.className.toLowerCase() 
    ? a.classList.add("activo")
    : a.classList.remove("activo")
});

/* --------------- Footer ---------------*/
const copyright = document.querySelector('#copyright');
const year = new Date().getFullYear();

copyright.textContent = `Copyright © ${year}. Todos los derechos reservados`;


/* --------------- Inicio ---------------*/

/* --------------- Emergencias ---------------*/
const buscador = document.querySelector("#buscador");
const titulo = document.querySelectorAll(".sub-item h3");


buscador.addEventListener("keyup", () => {
    console.log(buscador.value);
    titulo.forEach((valor, i) => {
        valor.textContent.toLowerCase().includes(buscador.value.toLowerCase()) 
        ?  titulo[i].parentElement.parentElement.classList.remove("filtro")
        : titulo[i].parentElement.parentElement.classList.add("filtro")
    })
});
/* --------------- Hospitales ---------------*/
// const uls = document.querySelectorAll("li a");

// const imagen = document.querySelector("#img");
// let hospitales = [{
//     nombre: "Rawson",
//     imagen: "rawson.png",
//     texto: "skdssd+sdsd",
//     iframe: ""
// }];
// uls.forEach((ul, indice) => {
//     ul.addEventListener("click", () => {
//         ul.textContent
//         imagen.outterHTML("src", "__")
//     })
// })

/* --------------- Conocenos ---------------*/


