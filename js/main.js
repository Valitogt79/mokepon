window.addEventListener('load', iniciarJuego); //cuando se cargue la pagina, se ejecuta la funcion inicio
let ataqueEnemigo;
let resultado = '';
let mensaje;
let vidasJugador = 3;
let vidasEnemigo = 3;

//Funcion de inicio del juego
function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'none';

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'none';

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', ataqueJugador);

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);

  let botonAguar = document.getElementById('boton-agua');
  botonAguar.addEventListener('click', ataqueAgua);

  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);

  let botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

//Funcion de ataque del jugador
let ataqueJugador = function ataqueJugador() {
  let sectionSeleccionarMascota = document.getElementById(
    'seleccionar-mascota'
  );
  sectionSeleccionarMascota.style.display = 'none';
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'flex';

  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let spanMascotaJugador = document.getElementById('mascota-jugador');

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else {
    alert('No seleccionaste ninguna mascota');
    reiniciarJuego();
  }
  seleccionarMascotaEnemigo();
};

//Funcion de ataque del enemigo
function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }
}

// funcion de aleatoriedad de ataque y enemigo
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//funciones de ataques
function ataqueFuego() {
  ataqueJugador = 'FUEGO';
  mascotaAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = 'AGUA';
  mascotaAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = 'TIERRA';
  mascotaAleatorioEnemigo();
}

//Funcion donde es seleccionado el enemigo aleatoriamente
function mascotaAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO';
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA';
  } else {
    ataqueEnemigo = 'TIERRA';
  }
  crearMensaje();
  combate();
}

//Fuuncion de combate entre jugador y enemigo
function combate() {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');
  if (ataqueJugador == ataqueEnemigo) {
    resultado = 'EMPATE';
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    resultado = 'GANASTE';
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    resultado = 'GANASTE';
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
    resultado = 'GANASTE';
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    resultado = 'PERDISTE';
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

//Funcion Revision de vidas de los jugadores despues de cada ataque
function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento PERDISTE 😔');
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal('Felicidataciones GANASTE 😎');
  }
}

//Funcion donde se despliega el mensaje de resultado
function crearMensaje(mensaje) {
  let sectionMensajes = document.getElementById('resultado');
  let ataquesDelJugador = document.getElementById('ataques-del-jugador');
  let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

  let nuevoAtaqueDelJuagador = document.createElement('p');
  let nuevoAtaqueDelEnemigo = document.createElement('p');

  sectionMensajes.innerHTML = `${resultado}`;
  nuevoAtaqueDelJuagador.innerHTML = `${ataqueJugador}`;
  nuevoAtaqueDelEnemigo.innerHTML = `${ataqueEnemigo}`;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJuagador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById('resultado');
  let parrafo = document.createElement('p');

  sectionMensajes.innerHTML = `${resultadoFinal}`;

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;

  let botonAguar = document.getElementById('boton-agua');
  botonAguar.disabled = true;

  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'block';
}

//funcion de reinicio de juego para volver a jugar
function reiniciarJuego() {
  location.reload();
}
