class hospital{
    constructor(tit, src, dependencia, tel, dir, mapa){
        this.titulo = tit;
        this.source = src;
        this.dependencia = dependencia;
        this.telefono = tel;
        this.direccion = dir;
        this.mapa = mapa;
    }
    modificar(titulo, imagen, informacion, iframe){
        titulo.innerHTML = this.titulo;
        imagen.src = this.source;
        imagen.alt = this.titulo;
        informacion[0].innerHTML = this.dependencia;
        informacion[1].innerHTML = this.telefono;
        informacion[2].innerHTML = this.direccion;
        iframe.src = this.mapa;
    }
}
/*Creo un objeto para cada hospital*/
let universitario = new hospital("Hospital Privado Universitario de Córdoba", "img/universitario.jpg","Privado","0351 468-8200","Naciones Unidas 346, Córdoba.", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13615.902773520049!2d-64.1991651!3d-31.4423361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a25925957c33%3A0xcbc974304cd4e547!2sHospital%20Privado%20Universitario%20de%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1683505791051!5m2!1ses-419!2sar");

let clinicas = new hospital("Hospital Nacional de Clínicas. F.C.M.","img/clinicas.jpg","Público","0351 535-3970","Santa Rosa 1564, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13621.118512963842!2d-64.2032683!3d-31.406421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432988f7a23a61f%3A0x87e3ddf84f214a81!2sHospital%20Nacional%20de%20Cl%C3%ADnicas%20(H.N.C.)%20%7C%20F.C.M.!5e0!3m2!1ses-419!2sar!4v1683506509406!5m2!1ses-419!2sar");

let hmu = new hospital("Hospital Municipal de Urgencias (H.M.U.)","img/urgencias.jpeg","Público","0351 427-6200","Catamarca 441, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.18803306411!2d-64.1759371!3d-31.4128309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29e677b495f%3A0x884abe7170ec0f43!2sHospital%20Municipal%20de%20Urgencias%20(H.M.U.)!5e0!3m2!1ses-419!2sar!4v1683506988259!5m2!1ses-419!2sar");

let trinidad = new hospital("Hospital de Niños de la Santísima Trinidad","img/trinidad.jpg","Público","0351 458-6405","Bajada Pucará 787, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13618.051940152704!2d-64.1690823!3d-31.4275416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2bf01d5e717%3A0xcbfc443ee7101b76!2sHospital%20de%20Ni%C3%B1os%20de%20la%20Sant%C3%ADsima%20Trinidad!5e0!3m2!1ses-419!2sar!4v1683507675923!5m2!1ses-419!2sar");

let allende_c = new hospital("Sanatorio Allende Cerro","img/allende_c.png","Privado","0810-555-2553","Av. Pedro Simón Laplace 5749, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13628.131357339267!2d-64.2426454!3d-31.358073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432994b2b79e21f%3A0x6808539eb7ef66e6!2sSanatorio%20Allende%20Cerro!5e0!3m2!1ses-419!2sar!4v1683508028066!5m2!1ses-419!2sar");

let allende_nc = new hospital("Sanatorio Allende Nueva Córdoba","img/Allende_nc.jpg","Privado","0810-555-2553","Obispo Oro 42, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13618.45748450981!2d-64.1868341!3d-31.4247492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f0b4ed949%3A0xea316ec20c2a59cf!2sSanatorio%20Allende%20Nueva%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1683508198354!5m2!1ses-419!2sar");

let italiano = new hospital("Hospital Italiano de Córdoba","img/italiano.jpg","Privado","0351 410-6500","Roma 550, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.68867766535!2d-64.1646236!3d-31.4093822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a748fda107%3A0x3712c6f5a0906d37!2sHospital%20Italiano%20(H.I.)%20%E2%80%93%20Sociedad%20de%20Beneficencia%20%5BSede%20Central%5D%20%7C%20Sociedad%20de%20Beneficencia%20Hospital%20Italiano!5e0!3m2!1ses-419!2sar!4v1683508354327!5m2!1ses-419!2sar");

let fabiola = new hospital("Clínica Universitaria Reina Fabiola (C.U.R.F.)","img/fabiola.jpg","Privado","0351 414-2121","Oncativo 1248, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.61698168495!2d-64.1680823!3d-31.4098761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a088ccda2d%3A0xfd191c1ea84b3929!2sCl%C3%ADnica%20Universitaria%20Reina%20Fabiola%20(C.U.R.F.)%20%E2%80%93%20Fundaci%C3%B3n%20para%20el%20Progreso%20de%20la%20Universidad%20Cat%C3%B3lica%20de%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1683508692723!5m2!1ses-419!2sar");

let parque = new hospital("Sanatorio Parque", "img/parque.jpg", "Privado", "0351 456-4000", "San Jerónimo 3115, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13618.643152148867!2d-64.1439673!3d-31.4234707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd4a680495f3%3A0xb5cea49d08d5399e!2sSanatorio%20Parque!5e0!3m2!1ses-419!2sar!4v1683508799767!5m2!1ses-419!2sar");

let rawson = new hospital("Hospital Rawson", "img/rawson2.jpeg", "Provincial","0351 434-8756","Bajada Pucará 2025, Córdoba", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.85301930798!2d-64.1695104!3d-31.4289112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2bfa1daff77%3A0x7c333b6f78632d!2sHospital%20Rawson!5e0!3m2!1ses-419!2sar!4v1683509097734!5m2!1ses-419!2sar");

let infantil = new hospital("Hospital Municipal Infantil","img/municipal_infantil.png","Público","0351 474-9253","Luis de Góngora 550-598, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.90579520956!2d-64.1819589!3d-31.380319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298455dd969bd%3A0x3ff06309ac9b1992!2sHospital%20Infantil%20%7C%20Municipalidad%20de%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1683765171148!5m2!1ses-419!2sar");

let maternidad = new hospital("Hospital Universitario de Maternidad y Neonatología (H.U.M.N.)","img/humn.png","Público","0351 535-3980","Rodríguez Peña 285, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13620.768937059025!2d-64.1964661!3d-31.4088293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298873f185fb5%3A0x2f238b1a974b44b2!2sHospital%20Universitario%20de%20Maternidad%20y%20Neonatolog%C3%ADa%20(H.U.M.N.)%20%7C%20F.C.M.!5e0!3m2!1ses-419!2sar!4v1683765292245!5m2!1ses-419!2sar");

let misericordia = new hospital("Hospital Nuestra Señora de la Misericordia","img/misericordia.png","Público","0351 434-4107", "Belgrano 1502, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.242817098138!2d-64.1967845!3d-31.4331122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a261ba27210d%3A0x75f08833c2350576!2sHospital%20Misericordia!5e0!3m2!1ses-419!2sar!4v1683765458492!5m2!1ses-419!2sar");

let roque = new hospital("Hospital San Roque","img/sanroque.png","Público","0351 553-8600","Bajada Pucará 1900, Córdoba.","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.949604948162!2d-64.1698154!3d-31.4282462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2bfb6e70841%3A0xfca8de29bb239a8e!2sNuevo%20Hospital%20San%20Roque!5e0!3m2!1ses-419!2sar!4v1683765525965!5m2!1ses-419!2sar");

let instituto = new hospital("Instituto Modelo de Cardiología Privado", "img/imc.png", "Privado","0351 485-8585","Av. Sagrada Familia 359, Córdoba.", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13622.664556604164!2d-64.235731!3d-31.395768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298cec623aea7%3A0xb36b6fb24903d335!2sInstituto%20Modelo%20de%20Cardiolog%C3%ADa!5e0!3m2!1ses-419!2sar!4v1683765629693!5m2!1ses-419!2sar");
/* Los guardo en un array en el orden correspondiente */
hospitales = [universitario, clinicas, hmu, trinidad,
            allende_c, allende_nc, italiano, fabiola,
            parque, rawson, infantil, maternidad,
            misericordia, roque, instituto];

/* Selecciono los elementos HTML a modificar */
const titulo = document.querySelector(".titulo");
const imagen = document.querySelector(".imagen img")
const info = document.querySelectorAll(".info span");
const mapa = document.querySelector(".ubicacion iframe");
/* Selecciono los elementos de la lista */
const links = document.querySelectorAll(".sidebar ul a");
const seccion = document.querySelector(".hospital")

links.forEach((link, indice) => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        window.scrollTo({top: 0,behavior: "smooth"});
        seccion.classList.remove("hidden")
        if(hospitales[indice].titulo.toLowerCase().includes(link.className)){
            hospitales[indice].modificar(titulo, imagen, info, mapa);
        }else{
            hospitales.filter(hospital => {hospital.titulo.toLowerCase().includes(link.className)}).modificar(titulo, imagen, info, mapa);
        }

    })
})




