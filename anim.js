// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "adentro tuyo", time: 13 },
  { text: "caigo del sol", time: 20 },
  { text: "adentro tuyo", time: 27 },
  { text: "es unico,es unico", time: 32 },
  { text: "cuerpos de luz,corriendo en pleno cielo", time: 51 },
  { text: "cristales de amor amarillo", time: 58 },
  { text: "no dejare que seas fria,yo podria calentarte", time: 64 },
  { text: "para abandonarme y renacer", time: 72 },
  { text: "(renacer,renacer)", time: 78 },
  { text: "explociones en tus ojos", time: 96 },
  { text: "agujeros en la tierra", time: 98 },
  { text: "y un verde profundo en el mar", time: 103 },
  { text: "hay algo en el aire", time: 110 },
  { text: "un detalle infinito", time: 113 },
  { text: "y quiero que dure para siempre", time: 117 },
  { text: "(para siempre)", time: 122 },
  { text: "adentro tuyo", time: 140 },
  { text: "caigo del sol", time: 147},
  { text: "adentro tuyo", time: 153 },
  { text: "es unico", time: 160 },
  { text: "adentro tuyo", time: 164 },
  { text: "caigo del sol", time: 170 },
  { text: "adentro tuyo", time: 178 },
  { text: "es unico,es unico", time: 184 },
  { text: "(es unico)", time: 194 },
  { text: "(es unico)", time: 200 },
  { text: "(es unico)", time: 208 },
  { text: "(es unico)", time: 214 },
  { text: "adentro tuyo", time: 215 } ,
  { text: "(es unico)", time: 222 },
  { text: "es unico", time: 228},
  { text: "adentro tuyo", time: 230},
  { text: "(es unico)", time: 235},
  { text: "es unico", time: 242},
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);