let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
  inicio: { 
  texto: "<h3>Montaje del carguero de Humboldt</h3>", 
  imagen: "./../../imgs/montaje4.png",
  sinSalida: true
 }
 }
A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");