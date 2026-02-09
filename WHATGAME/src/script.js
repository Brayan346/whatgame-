const juegos = [
  { nombre: "Minecraft", imagen: "/minecraft.jpg" },
  { nombre: "GTA V", imagen: "/gta.jpg" },
  { nombre: "Zelda: Breath of the Wild", imagen: "/zelda.jpg" },
  { nombre: "Marvel Rivals", imagen: "/marvel.jpg" },
  { nombre: "Mortal Kombat 11", imagen: "/mk11.jpg" },
  { nombre: "Peak", imagen: "/peak.jpg" },
  { nombre: "Read Dead Redemption 2", imagen: "/rdr2.jpg"},
  {nombre: "God Of War Ragnarok", imagen: "/god_of_war_r.jpg"},
  {nombre:"God Of War", imagen: "/god_of_war.jpg"},
  {nombre:"Cyberpunk 2077", imagen: "/cyberpunk_2077.jpg"},
  {nombre: "Detroit Become Human", imagen: "/detroit.jpg"},
  {nombre:"Wuthering Waves", imagen: "/wuwa.jpg"}
];

function elegirJuego() {
  const random = Math.floor(Math.random() * juegos.length);
  document.getElementById("gameName").textContent = juegos[random].nombre;
  document.getElementById("gameImage").src = juegos[random].imagen;
}
elegirJuego();
