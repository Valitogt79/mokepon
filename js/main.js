let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
let sectionReiniciar = document.getElementById('reiniciar');
let botonMascotaJugador = document.getElementById('boton-mascota');
let botonTierra = document.getElementById('boton-tierra');
let botonFuego = document.getElementById('boton-fuego');
let botonAgua = document.getElementById('boton-agua');
let botonReiniciar = document.getElementById('boton-reiniciar');

let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
let inputHipodoge = document.getElementById('hipodoge');
let inputCapipepo = document.getElementById('capipepo');
let inputRatigueya = document.getElementById('ratigueya');
let spanMascotaJugador = document.getElementById('mascota-jugador');

let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

let spanVidasJugador = document.getElementById('vidas-jugador');
let spanVidasEnemigo = document.getElementById('vidas-enemigo');

let sectionMensajes = document.getElementById('resultado');
let ataquesDelJugador = document.getElementById('ataques-del-jugador');
let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = 'none';
  sectionReiniciar.style.display = 'none';
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  botonFuego.addEventListener('click', ataqueFuego);
  botonAgua.addEventListener('click', ataqueAgua);
  botonTierra.addEventListener('click', ataqueTierra);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = 'none';
  sectionSeleccionarAtaque.style.display = 'flex';
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else {
    alert('Selecciona una mascota');
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = 'AGUA';
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = 'TIERRA';
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO';
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA';
  } else {
    ataqueEnemigo = 'TIERRA';
  }

  combate();
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje('EMPATE');
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje('PERDISTE');
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal('FELICITACIONES! Ganaste :)');
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento, perdiste :(');
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement('p');
  let nuevoAtaqueDelEnemigo = document.createElement('p');
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
