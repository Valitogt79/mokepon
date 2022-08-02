window.addEventListener("load", inicio); //cuando se cargue la pagina, se ejecuta la funcion inicio

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let inputLangostelvis = document.getElementById("langostelvis");
  let inputTucapalma = document.getElementById("tucapalma");
  let inputPydos = document.getElementById("pydos");

  if (inputHipodoge.checked) {
    alert("Seleccionaste a hipodoge");
  } else if (inputCapipepo.checked) {
    alert("Seleccionaste a capipepo");
  } else if (inputRatigueya.checked) {
    alert("Seleccionaste a ratigueya");
  } else if (inputLangostelvis.checked) {
    alert("Seleccionaste a langostelvis");
  } else if (inputTucapalma.checked) {
    alert("Seleccionaste a tucapalma");
  } else if (inputPydos.checked) {
    alert("Seleccionaste a pydos");
  } else {
    alert("No seleccionaste ninguna mascota");
  }
}

function inicio() {
  let botonMascotaJugador = document
    .getElementById("boton-mascota")
    .addEventListener("click", seleccionarMascotaJugador);
}
