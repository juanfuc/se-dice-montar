let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
  inicio: { 
  texto: "<h3>Montaje carguero prehispánico y colonial</h3>", 
  imagen: "./../../imgs/montaje2.png",
  sinSalida: true
 }
 }
A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");