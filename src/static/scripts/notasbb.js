let contenedor = document.querySelector('.bbmensajes');
let mensaje = document.querySelector('.mensaje');
let autor = document.querySelector('.autor');

const options = {
    method: "GET"
  };

  fetch("https://api.breakingbadquotes.xyz/v1/quotes", options)
    .then(response => response.json())
    .then(data => {
        mensaje.innerHTML = data[0].quote
        autor.innerHTML = data[0].author

    });

window.addEventListener('load', ()=>{
    contenedor.style.left = '0px';
    setTimeout(() => {
        contenedor.style.left = '-400px';
    }, 5000);
});



