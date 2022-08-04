window.addEventListener("load", iniciarJuego); //cuando se cargue la pagina, se ejecuta la funcion inicio
let ataqueEnemigo;
let resultado = "";

let ataqueJugador = function ataqueJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let inputLangostelvis = document.getElementById("langostelvis");
  let inputTucapalma = document.getElementById("tucapalma");
  let inputPydos = document.getElementById("pydos");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = "Langostelvis";
  } else if (inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = "Tucapalma";
  } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = "Pydos";
  } else {
    alert("No seleccionaste ninguna mascota");
  }
  seleccionarMascotaEnemigo();
};

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 6);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  } else if (mascotaAleatorio == 4) {
    spanMascotaEnemigo.innerHTML = "Langostelvis";
  } else if (mascotaAleatorio == 5) {
    spanMascotaEnemigo.innerHTML = "Tucapalma";
  } else if (mascotaAleatorio == 6) {
    spanMascotaEnemigo.innerHTML = "Pydos";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  mascotaAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  mascotaAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  mascotaAleatorioEnemigo();
}

function mascotaAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate();
  crearMensaje();
}

function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    resultado = "GANASTE";
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultado = "GANASTE";
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    resultado = "GANASTE";
  } else {
    resultado = "PERDISTE";
  }
}

function crearMensaje() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML = `tu macota atacó con ${ataqueJugador}, la mascota de tu enemigo atacó con ${ataqueEnemigo} - ${resultado}`;

  sectionMensajes.appendChild(parrafo);
}

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", ataqueJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAguar = document.getElementById("boton-agua");
  botonAguar.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}
