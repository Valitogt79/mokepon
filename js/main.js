window.addEventListener('load', iniciarJuego); //cuando se cargue la pagina, se ejecuta la funcion inicio
let ataqueEnemigo;
let resultado = '';
let mensaje;
let vidasJugador = 3;
let vidasEnemigo = 3;

//Funcion de ataque del jugador
let ataqueJugador = function ataqueJugador() {
  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let inputLangostelvis = document.getElementById('langostelvis');
  let inputTucapalma = document.getElementById('tucapalma');
  let inputPydos = document.getElementById('pydos');
  let spanMascotaJugador = document.getElementById('mascota-jugador');

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = 'Langostelvis';
  } else if (inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = 'Tucapalma';
  } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = 'Pydos';
  } else {
    alert('No seleccionaste ninguna mascota');
  }
  seleccionarMascotaEnemigo();
};

//Funcion de ataque del enemigo
function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 6);
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  } else if (mascotaAleatorio == 4) {
    spanMascotaEnemigo.innerHTML = 'Langostelvis';
  } else if (mascotaAleatorio == 5) {
    spanMascotaEnemigo.innerHTML = 'Tucapalma';
  } else if (mascotaAleatorio == 6) {
    spanMascotaEnemigo.innerHTML = 'Pydos';
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
  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');

  parrafo.innerHTML = `tu macota atacó con ${ataqueJugador}, la mascota de tu enemigo atacó con ${ataqueEnemigo} - ${resultado}`;

  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');

  parrafo.innerHTML = `${resultadoFinal}`;

  sectionMensajes.appendChild(parrafo);
}

//Funcion de inicio del juego
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', ataqueJugador);

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);

  let botonAguar = document.getElementById('boton-agua');
  botonAguar.addEventListener('click', ataqueAgua);

  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);
}
