let A = new Aventura("es", {typewriterSpeed:0, defaultCSS: false});

let escenas = {
    inicio: {
        texto: "<h3>Montaje del origen  de la iconografía del carguero. Introducción</h3>",
        imagen: "./../../imgs/montaje1.png",
        sinSalida: true,

        areas: [
            { 
             x: 260,
             y: 211,
             w: 194,
             h: 120,
             texto: "",
             escena: "cargueroPrehispánico"
           },
           {
             x: 480,
             y: 152,
             w: 166,
             h: 250,
             texto:"",
             escena: "expediciónBotánica"
           },
           {
             x:820,
             y:186,
             w:360,
             h:238,
             texto: "",
             escena: "cargueroVirreinalNG"
           },
           {
             x:1180,
             y:172,
             w:284,
             h:200,
             texto:"",
             escena: "geografíadelasPlantas"
           },
           {
             x: 1494,
             y: 216,
             w: 254,
             h: 334,
             texto: "",
             escena: "ciegoyParalítico"
           },
           {
             x: 256,
             y: 580,
             w: 280,
             h: 370,
             texto: "",
             escena: "coleccionBauza"
           },
           {
             x: 860,
             y: 596,
             w: 750,
             h: 520,
             texto: "",
             escena: "cargueroHumboldt"
           },
           {
             x: 1354,
             y: 494,
             w: 190,
             h: 194,
             texto: "",
             escena: "cargueroChino"
           },
           {
             x: 1345,
             y: 730,
             w: 114,
             h: 235,
             texto: "",
             escena: "cargueroQuadrodelPeru"
           },
           {
             x: 1550,
             y: 530,
             w: 132,
             h: 210,
             texto: "",
             escena: "carguerodelaMetropoli"
           },
           {
             x: 275,
             y: 1062,
             w: 390,
             h: 288,
             texto: "",
             escena: "cargueroPinturasdeMestizaje"
           },
           {
             x: 690,
             y: 1052,
             w: 198,
             h: 288,
             texto: "",
             escena: "VillaneroMira"
           },
           {
             x: 930,
             y: 1052,
             w: 130,
             h: 288,
             texto: "",
             escena: "fique"
           },
           {
             x: 1245,
             y: 1062,
             w: 332,
             h: 286,
             texto: "",
             escena: "saturdayMagazine"
           },
           {
             x: 1532,
             y: 916,
             w: 168,
             h: 224,
             texto: "",
             escena: "cargueroSátira"
           }
           ]
           },
           coleccionBauza: {
             texto:"<h3>El carguero de la expedición Malaspina<h3>",
             imagen: "./../../imgs/img1.png",
             escena: "inicio"
            },
            cargueroHumboldt:{
              texto: "<h3>El carguero Villanero<h3>",
              imagen: "./../../imgs/img4.png",
              escena: "inicio",
              areas: [
               {
                 x: 511,
                 y: 438,
                 w: 40,
                 h: 70,
                 texto: "",
                 escena: "VillaneroMira" 
               }
             ]
           },
           cargueroPrehispánico: {
             texto: "<h3>Carguero Prehispánico<h3>",
             imagen: "./../../imgs/img_a.png",
             escena: "inicio" 
           },
           expediciónBotánica: {
             texto: "<h3>Expedición Botánica<h3>",
             imagen: "./../../imgs/img_b.png",
             escena: "inicio"
           },
           cargueroVirreinalNG: {
             texto: "<h3>Carguero en archivo virreinal<h3>",
             imagen: "./../../imgs/img2.png",
             escena: "inicio"
           },
           geografíadelasPlantas: {
             texto: "<h3>Tabla física. Geografía de las Plantas<h3>",
             imagen: "./../../imgs/img_m.png",
             escena: "inicio"
           },
           ciegoyParalítico: {
             texto: "<h3>Fábula del ciego y el paralítico<h3>",
             imagen: "./../../imgs/img_r.png",
             escena: "inicio"
           },
           cargueroChino: {
             texto: "<h3>Carguero Chino<h3>",
             imagen: "./../../imgs/img9.png",
             escena: "inicio" 
           },
           cargueroQuadrodelPeru: {
             texto: "<h3>Quadro del Perú<h3>",
             imagen: "./../../imgs/img_f.png",
             escena: "detalleCargueroQuadrodelPeru"
           },
           detalleCargueroQuadrodelPeru: {
             texto: "<h3>Detalle del Quadro del Perú. Carguero de las naciones civilizadas<h3>",
             imagen: "./../../imgs/img_i.png",
             escena: "inicio"
           },
           carguerodelaMetropoli: {
             texto: "<h3>Carguero de la Metropoli (Paris)<h3>",
             imagen: "./../../imgs/img8.png",
             escena: "inicio"
           },
           cargueroPinturasdeMestizaje: {
             texto: "<h3>Carguero Pinturas de Mestizaje<h3>",
             imagen: "./../../imgs/img_j.png",
             escena: "inicio"
           },
           VillaneroMira: {
             texto: "<h3>El carguero Villanero mira al observador<h3>",
             imagen: "./../../imgs/img4.1.png",
             escena: "inicio"
           },
           fique: {
             texto: "<h3>Fique<h3>",
             imagen: "./../../imgs/img4.2.png",
             escena: "inicio"
           },
           saturdayMagazine: {
             texto: "<h3>Carguero de Humboldt en el Saturday Magazine 1838<h3>",
             imagen: "./../../imgs/img5.png",
             escena: "inicio"
           },
           cargueroSátira: {
             texto: "<h3>Caricatura de un miembro de la élite estadounidense cargando a diferentes personas racializadas de clases subalternas. 1868<h3>",
             imagen: "./../../imgs/img_t.png",
             escena: "inicio"
           } 
    }

A.fijarEscenas(escenas).probarEscenas().iniciarAventura("inicio");