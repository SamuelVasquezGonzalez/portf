fetch('https://samuelvasquezgonzalez.github.io/API-portf/api-habilidades.json')
  .then((response) => response.json())
  .then((data) => guardarData(data))

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

  crearTarjeta(diseñoWeb, data[1].fontAwesomeIcons.imagen, data[1].fontAwesomeIcons.parrafo)
  crearTarjeta(diseñoWeb, data[1].googleIcons.imagen, data[1].googleIcons.parrafo)
  crearTarjeta(diseñoWeb, data[1].ps.imagen, data[1].ps.parrafo)
  
  crearTarjeta(baseDatos, data[2].msql.imagen, data[2].msql.parrafo)

  crearTarjeta(herramientas, data[3].git.imagen, data[3].git.parrafo)
  crearTarjeta(herramientas, data[3].npm.imagen, data[3].npm.parrafo)
  crearTarjeta(herramientas, data[3].terminal.imagen, data[3].terminal.parrafo)
  crearTarjeta(herramientas, data[3].vsc.imagen, data[3].vsc.parrafo)
  crearTarjeta(herramientas, data[3].workbench.imagen, data[3].workbench.parrafo)
  crearTarjeta(herramientas, data[3].xampp.imagen, data[3].xampp.parrafo)

  crearTarjeta(backend, data[4].nodeJs.imagen, data[4].nodeJs.parrafo)
  crearTarjeta(backend, data[4].express.imagen, data[4].express.parrafo)


}