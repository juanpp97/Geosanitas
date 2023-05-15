
/* Selecciono los elementos HTML a modificar */
const estilos = document.documentElement.style;
const links = document.querySelectorAll(".menu_hospitales a");
const seccion_hospital = document.querySelector(".hospital")
const home = document.querySelector(".home");
const seccion_inicial = document.querySelector(".inicial");
const menu_acordeon = document.querySelector(".list");
const lista = document.querySelector(".menu_hospitales");

const getHospitales = async () => {
    try {

        const hospitales = await fetch(`https://mocki.io/v1/809194dd-b320-41f1-b2df-8f6bb61ade40`);
        const hospitalesJson = await hospitales.json();
        const { createApp } = Vue
        createApp({
            
            data() {
                return {
                    hospitales: hospitalesJson,
                    titulo: "",
                    scr: "",
                    dependencia: "",
                    telefono: "",
                    direccion: "",
                    ubicacion: "",
                }
            },
            methods: {
                
                cambiarHospital(hospital, event){
                    event.preventDefault();
                    this.$refs.link.forEach(element => {
                        element.removeAttribute("id");
                    });
                    event.target.id ="hospital-activo";    
      
                    this.titulo = hospital.titulo;
                    this.scr = hospital.scr;
                    this.dependencia = hospital.dependencia;
                    this.telefono = hospital.telefono;
                    this.direccion = hospital.direccion;
                    this.ubicacion = hospital.ubicacion;
                    this.$refs.hospital.classList.remove("hidden");
                    this.$refs.inicial.classList.add("hidden");
            },
            home(){

            }
            }
            
        }).mount(".container-hospitales")

    } catch (error) { console.log("Hubo un error", error) }
}
getHospitales();


menu_acordeon.addEventListener("click", () => {
    lista.classList.toggle("acordeon");
    if(lista.classList.contains("acordeon")){
        estilos.setProperty("--disp-cards", "none");
        estilos.setProperty("--disp-container", "flex");
    }else{
        setTimeout(()=> {
            estilos.setProperty("--disp-cards", "grid");
            estilos.setProperty("--disp-container", "block");
            seccion_hospital.classList.add("hidden");
            seccion_inicial.classList.remove("hidden");
        },1000)
        
    }
});


home.addEventListener("click", () => {
    seccion_hospital.classList.add("hidden");
    seccion_inicial.classList.remove("hidden");

})



