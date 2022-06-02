let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
  inicio: { 
  texto: "<h3>Montaje del carguero de la colonia tardía e Ilustración criolla</h3>", 
  imagen: "./../../imgs/montaje3.png", 
  sinSalida: true,


 areas: [
    {
         x: 636,
         y: 1350,
         w: 552,
         h: 848,
         texto:"",
         escena: "expediciónBotánica1" 
    },
    {
        x: 1592,
        y: 1064,
        w: 816,
        h: 874,
        texto: "",
        escena: "expediciónBotánica2"
    },
    {
        x: 2808,
        y: 840,
        w: 988,
        h: 736,
        texto: "",
        escena: "malaspina1"
    },
    {
        x: 3992,
        y: 680,
        w: 784,
        h: 1024,
        texto: "",
        escena: "malaspina2"
    },
    {
        x: 5256,
        y: 832,
        w: 1192,
        h: 728,
        texto: "",
        escena: "cuadrodelPerú1"
    },
    {
        x: 4672,
        y: 2010,
        w: 1040,
        h: 990,
        texto: "",
        escena: "relaciónGobierno"
    },
    {
        x: 1460, 
        y: 2720,
        w: 1320,
        h: 1456,
        texto: "",
        escena: "cuadrodelPerú2" 
    },
    {
        x: 3060,
        y: 2560,
        w: 1550,
        h: 2024,
        texto: ",",
        escena: "malaspina3"
    }
 ]
}, 
 expediciónBotánica1: {
    texto: "<h3>Expedición Botánica<h3>",
    imagen: "./../../imgs/img_b.png",
    escena: "mutis" 
},
expediciónBotánica2: {
    texto: "<h3>Expedición Botánica<h3>",
    imagen: "./../../imgs/img_c.png",
    escena: "mutis"
},
mutis: {
    texto: "<h3>José Celestino Mutis. Por: R. Cristobal, 1930.  Oleo sobre lienzo: 122 x 92.6cm</h3><h3>Epistemología visual</h3><p>Daniela Bleichmar ha acuñado el término <a href='https://www.worldcat.org/title/visible-empire-botanical-expeditions-and-visual-culture-in-the-hispanic-enlightenment/oclc/776618119' target= 'blank'>“epistemología visual”</a> para dar cuenta de la centralidad que el entrenamiento de la mirada y un cierto modo de producción de imágenes jugaron en el contexto de las expediciones científicas borbonas y de las discusiones y debates de la ilustración criolla y de la administración pública virreinal del período. En todos estos casos los actores querían, a su modo, hacer visible el imperio. En las expediciones botánicas, por ejemplo, las imágenes permitían a los historiadores naturales tener a su disposición para la clasificación taxonómica las características de los especímenes de modo más rápido y eficaz que si tuvieran el espécimen mismo, que siempre era difícil de transportar, era frágil, y podía degenerarse con el paso del tiempo. El estilo de las ilustraciones consistía en la presentación de una naturaleza idealizada que muestra las posibilidades espacio temporales de su desarrollo y que está geográficamente descontextualizada y superpuesta en una página blanca. Esto permitía la operación de acopio, apropiación, traslado, clasificación y resguardo de los ejemplares naturales del nuevo mundo. Así, la borradura de la especificidad geográfica está vinculada a una visión extractiva de la naturaleza y de la relación entre Europa y el resto del mundo, lo que implica aprovecharse de la biodiversidad andina para transportarla a los lugares de acopio en la Metrópoli. </p>",
    imagen: "./../../imgs/img11.png",
    escena: "inicio"
},
malaspina1: {
    texto: "<h3>Indio yuri e indio iquito. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 180 mm, 245 mm. Expedición Malaspina. Museo de América, Madrid.</h3>",
    imagen: "./../../imgs/img_d.png",
    escena: "inicio"
},
malaspina2: {
    texto: "<h3>Indio iquito. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 170 mm, 110 mm. Expedición Malaspina. Museo de América, Madrid.</h3>",
    imagen: "./../../imgs/img_e.png",
    escena: "inicio"
},
malaspina3: {
    texto: "<h3>Modo de cargar los indios a los que caminan por tierra de Quito a Napo. Anónimo, 1789-1794. Papel verjurado, Tinta, Pigmento. Aguada, Pluma. 170 mm, 115 mm. Expedición Malaspina. Museo de América, Madrid.</h3>",
    imagen: "./../../imgs/img1.png",
    escena: "inicio"

},
cuadrodelPerú1: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC).</h3>",
    imagen: "./../../imgs/img_f.png",
    escena: "detalleCuadrodelPerú1"
},
cuadrodelPerú2: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC).</h3>",
    imagen: "./../../imgs/img_f.png",
    escena: "detalleCuadrodelPerú2" 
},
detalleCuadrodelPerú1: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC) (Detalle).</h3>",
    imagen: "./../../imgs/img_g.png",
    escena: "inicio"
},
detalleCuadrodelPerú2: {
    texto: "<h3>Quadro de Historia Natural, Civil y Geográfica del Reyno del Perú. José Ignacio de Lequanda y Louis Thiébaut, 1799.  331 x 118,5 cm. Museo Nacional de Ciencias Naturales (MNCN-CSIC) (Detalle).</h3>",
    imagen: "./../../imgs/img12.png",
    escena: "inicio"
},
relaciónGobierno: {
    texto: "<h3>Gil de Lemos y Taboada, Francisco, and Vallenari. “Relación de gobierno que el Exmo. Sr. frey Don Francisco Gil de Lemos y Taboada, Virrey del Perú, entrega a su succesor el Exmo. Señor de Vallenari. Año de 1796”, 1796: folio 78.</h3>",
    imagen: "./../../imgs/img_h.png",
    escena: "detalleRelaciónGobierno"
},
detalleRelaciónGobierno: {
    texto: "<h3>Gil de Lemos y Taboada, Francisco, and Vallenari. “Relación de gobierno que el Exmo. Sr. frey Don Francisco Gil de Lemos y Taboada, Virrey del Perú, entrega a su succesor el Exmo. Señor de Vallenari. Año de 1796”, 1796: folio 78 (Detalle).</h3>",
    imagen: "./../../imgs/img_h.1.png",
    escena: "inicio" 
} 
}

A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");