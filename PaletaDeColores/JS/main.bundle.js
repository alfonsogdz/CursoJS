"use strict";

const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
color.addEventListener("input", () => {
  const value = color.value;
  salida.innerHTML = value;
  salida.style.background = value;
  salida.style.color = "#fff";
});