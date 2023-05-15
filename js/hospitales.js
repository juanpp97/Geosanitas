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
                this.$refs.hospital.classList.add("hidden");
                this.$refs.inicial.classList.remove("hidden");
                this.$refs.link.forEach(element => {
                    element.removeAttribute("id");
                });
            },
            acordeon(){
                const estilos = document.documentElement.style;

                this.$refs.menu.classList.toggle("acordeon");
                if(this.$refs.menu.classList.contains("acordeon")){
                    estilos.setProperty("--disp-cards", "none");
                    estilos.setProperty("--disp-container", "flex");
                }else{
                    setTimeout(()=> {
                        estilos.setProperty("--disp-cards", "grid");
                        estilos.setProperty("--disp-container", "block");
                        this.$refs.hospital.classList.add("hidden");
                        this.$refs.inicial.classList.remove("hidden");
                        this.$refs.link.forEach(element => {
                            element.removeAttribute("id");
                        });
                    },1000)
                    
                }
            }
            }
            
        }).mount(".container-hospitales")

    } catch (error) { console.log("Hubo un error", error) }
}
getHospitales();


