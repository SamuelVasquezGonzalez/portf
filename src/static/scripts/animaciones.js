// ------- cambiar imagen -----
let imgMoneda = document.querySelector(".img-moneda")
let rotado = true
let btnActivarAnimacion = document.querySelector('.activarAnimacion');
btnActivarAnimacion.addEventListener('click', girar);

function girar () {
  if(rotado == false){
    imgMoneda.style.transform = `rotateY(${180}deg)`
    rotado = true
  }else{
    imgMoneda.style.transform = `rotateY(${0}deg)`
    rotado = false
  }
}
// ----- Waypoints --------

let aButton = document.querySelector(".si");
if (screen.width < 399) {
  aButton.innerHTML = "Yo";
} else {
  aButton.innerHTML = "Acerca de";
}

let cero = document.getElementById("cero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

let liList = document.querySelectorAll(".li");

var waypointCero = new Waypoint({
  element: cero,
  handler: function (direction) {
    liList[0].classList.toggle("activo");
    if (direction == "up") {
      liList[1].classList.remove("activo");
    }
  },
});

var waypointOne = new Waypoint({
  element: one,
  handler: function (direction) {
    liList[1].classList.toggle("activo");
    if (direction == "down") {
      liList[0].classList.remove("activo");
    }
    if (direction == "up") {
      liList[2].classList.remove("activo");
    }
  },
  offset: 95,
});

var waypointTwo = new Waypoint({
  element: two,
  handler: function (direction) {
    liList[2].classList.toggle("activo");
    if (direction == "down") {
      liList[1].classList.remove("activo");
    }
    if (direction == "up") {
      liList[3].classList.remove("activo");
    }
  },
  offset: 95,
});

var waypointThree = new Waypoint({
  element: three,
  handler: function (direction) {
    liList[3].classList.toggle("activo");
    if (direction == "down") {
      liList[2].classList.remove("activo");
    }
    if (direction == "up") {
      liList[4].classList.remove("activo");
    }
  },
  offset: 95,
});

var waypointFour = new Waypoint({
  element: four,
  handler: function (direction) {
    liList[4].classList.toggle("activo");
    if (direction == "down") {
      liList[3].classList.remove("activo");
    }
  },
  offset: 97,
});
