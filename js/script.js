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




