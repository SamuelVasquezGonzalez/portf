fetch('https://samuelvasquezgonzalez.github.io/API-portf/media.json')
  .then((response) => response.json())
  .then((data) => guardarMedia(data))

let skeleton = document.querySelector(".banskeleton")
let yo = document.querySelector(".banyo")
let luna = document.querySelector(".banluna")
let proyectos = document.querySelectorAll(".pr")
let skater = document.querySelector(".skater")
let skeletonGif = document.querySelector(".skeletonS")
let vector = document.querySelector(".vector")

const guardarMedia = (data) => {

    skeleton.src = data[0].bannerSkeleton;
    yo.src = data[0].bannerImg;
    luna.src = data[0].moon;

    proyectos[0].src = data[0].lmGalery;
    proyectos[1].src = data[0].dados;
    proyectos[2].src = data[0].demongo;
    proyectos[3].src = data[0].github;

    skater.src = data[0].skate;

    skeletonGif.src = data[0].skeleton;
    vector.src = data[0].vector;


}