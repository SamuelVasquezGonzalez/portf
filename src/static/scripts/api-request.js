fetch('https://samuelvasquezgonzalez.github.io/API-portf/api-habilidades.json')
  .then((response) => response.json())
  .then((data) => guardarData(data))
  .catch((error) => errorLo(error))

  const routeError = '../multimedia/error.png';
  const errorMsm = 'No hemos podido cargar la información :(';

  let desarrolloWeb = document.querySelector(".webTools");
  let diseñoWeb = document.querySelector(".desingWeb");
  let baseDatos = document.querySelector(".db");
  let herramientas = document.querySelector(".tools");
  let backend = document.querySelector(".backend");

const guardarData = (data) => {

  function crearTarjeta (contenedor, imagen, parrafo){
      // Crear tarejeta
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("habilidad");
        tarjeta.classList.add("headline");

        let img = document.createElement("img");
        img.classList.add("img-comunes");
        img.classList.add("pequeña");
        img.src = imagen;

        let p = document.createElement("p");
        p.classList.add("parrado");
        p.classList.add("negrilla");
        p.classList.add("hab");
        p.innerHTML = parrafo;

        tarjeta.appendChild(img);
        tarjeta.appendChild(p);

        contenedor.appendChild(tarjeta)
      
  }
    crearTarjeta(desarrolloWeb, data[0].html.imagen, data[0].html.parrafo)
    crearTarjeta(desarrolloWeb, data[0].css.imagen, data[0].css.parrafo)
    crearTarjeta(desarrolloWeb, data[0].js.imagen, data[0].js.parrafo)

    crearTarjeta(diseñoWeb, data[1].ps.imagen, data[1].ps.parrafo)
    crearTarjeta(diseñoWeb, data[1].ai.imagen, data[1].ai.parrafo)
    
    crearTarjeta(baseDatos, data[2].mysql.imagen, data[2].mysql.parrafo)

    crearTarjeta(herramientas, data[3].git.imagen, data[3].git.parrafo)
    crearTarjeta(herramientas, data[3].npm.imagen, data[3].npm.parrafo)

    crearTarjeta(backend, data[4].nodeJs.imagen, data[4].nodeJs.parrafo)
    crearTarjeta(backend, data[4].express.imagen, data[4].express.parrafo)
}


const errorLo = (error) =>{
  function crearTarjeta (contenedor, imagen, parrafo){
    // Crear tarejeta
      let tarjeta = document.createElement("div");
      tarjeta.classList.add("habilidad");
      tarjeta.classList.add("headline");

      let img = document.createElement("img");
      img.classList.add("img-comunes");
      img.classList.add("pequeña");
      img.src = imagen;

      let p = document.createElement("p");
      p.classList.add("parrado");
      p.classList.add("negrilla");
      p.classList.add("hab");
      p.innerHTML = parrafo;

      tarjeta.appendChild(img);
      tarjeta.appendChild(p);

      contenedor.appendChild(tarjeta)
    
}
  crearTarjeta(desarrolloWeb, routeLoadError, errorMsm)
  crearTarjeta(desarrolloWeb, routeLoadError, errorMsm)
  crearTarjeta(desarrolloWeb, routeLoadError, errorMsm)

  crearTarjeta(diseñoWeb, routeLoadError, errorMsm)
  crearTarjeta(diseñoWeb, routeLoadError, errorMsm)
  crearTarjeta(diseñoWeb, routeLoadError, errorMsm)
  crearTarjeta(diseñoWeb, routeLoadError, errorMsm)
  
  crearTarjeta(baseDatos, routeLoadError, errorMsm)

  crearTarjeta(herramientas, routeLoadError, errorMsm)
  crearTarjeta(herramientas, routeLoadError, errorMsm)
  crearTarjeta(herramientas, routeLoadError, errorMsm)
  crearTarjeta(herramientas, routeLoadError, errorMsm)
  crearTarjeta(herramientas, routeLoadError, errorMsm)
  crearTarjeta(herramientas, routeLoadError, errorMsm)

  crearTarjeta(backend, routeLoadError, errorMsm)
  crearTarjeta(backend, routeLoadError, errorMsm)
  console.log(error)
}

