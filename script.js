const juegos = [
  { nombre: "Minecraft", imagen: "img/minecraft.jpg" },
  { nombre: "GTA V", imagen: "img/gta.jpg" },
  { nombre: "FIFA 23", imagen: "img/fifa.jpg" },
  { nombre: "Zelda: Breath of the Wild", imagen: "img/zelda.jpg" },
  { nombre: "Call of Duty", imagen: "img/cod.jpg" }
];

function elegirJuego() {
  const random = Math.floor(Math.random() * juegos.length);
  document.getElementById("gameName").textContent = juegos[random].nombre;
  document.getElementById("gameImage").src = juegos[random].imagen;
}
