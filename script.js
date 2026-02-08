const juegos = [
  { nombre: "Minecraft", imagen: "img/minecraft.jpg" },
  { nombre: "GTA V", imagen: "img/gta.jpg" },
  { nombre: "Zelda: Breath of the Wild", imagen: "img/zelda.jpg" },
  { nombre: "Marvel Rivals", imagen: "img/marvel.jpg" },
  { nombre: "Mortal Kombat 11", imagen: "img/mk11.jpg" },
  { nombre: "Peak", imagen: "img/peak.jpg" },
  { nombre: "Read Dead Redemption 2", imagen: "img/rdr2.jpg"}

];

function elegirJuego() {
  const random = Math.floor(Math.random() * juegos.length);
  document.getElementById("gameName").textContent = juegos[random].nombre;
  document.getElementById("gameImage").src = juegos[random].imagen;
}
