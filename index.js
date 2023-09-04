"use strict";

document.querySelector("select").addEventListener("change", skiftTema);
let body = document.querySelector("body")

function skiftTema(event) {
  console.log(event.target.value);

  if (event.target.value === "dark") {
    body.dataset.theme = "dark";
  } else if (event.target.value === "light") {
    body.dataset.theme = "light";
  } else if (event.target.value === "hawaii") {
    body.dataset.theme = "hawaii";
  }
}
