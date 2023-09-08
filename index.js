"use strict";

window.onload;
let body = document.querySelector("body");

const themeValue = localStorage.getItem("theme");

body.dataset.theme = themeValue;

document.querySelector("select").addEventListener("change", skiftTema);

function skiftTema(event) {
  console.log(event.target.value);

  if (event.target.value === "dark") {
    body.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else if (event.target.value === "light") {
    body.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else if (event.target.value === "hawaii") {
    body.dataset.theme = "hawaii";
    localStorage.setItem("theme", "hawaii");
  }
}
