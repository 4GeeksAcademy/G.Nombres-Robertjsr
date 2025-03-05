import "bootstrap";
import "./style.css";


import "./assets/img/perro inteligente.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  console.log("Hello Rigo from the console!");
};

  function generadorDeNombres () {
    
    let pronombre = ['the','our'];
    let adjetivo = ['great','big'];
    let sustantivo = ['jogger','racoon'];
    let dominio = [ '.com','.org','.gov' ]

    let texto1 = pronombre [Math.floor(Math.random() * pronombre.length)]
    let texto2 = adjetivo [Math.floor(Math.random() * adjetivo.length)]
    let texto3 = sustantivo [Math.floor(Math.random() * sustantivo.length)]
    let texto4 = dominio [Math.floor(Math.random() * dominio.length)]

    let resultado = texto1 + " "  + texto2 + " " + texto3 + " " + texto4;

    document.getElementById("excuse").innerHTML = resultado
  }
  generadorDeNombres() 