const couleur = document.getElementById("couleur");

couleur.addEventListener("input", () => {
  document.querySelector("p").style.color = couleur.value;
});

const taille = document.getElementById("taille");

taille.addEventListener("input", () => {
  document.querySelector("p").style.fontSize = taille.value + "px";
});

const police = document.getElementById("police");

police.addEventListener("change", () => {
  document.querySelector("p").style.fontFamily = police.value;
});
