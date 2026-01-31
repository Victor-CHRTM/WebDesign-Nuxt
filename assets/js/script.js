// Récupération des éléments HTML
const burger = document.querySelector(".burger"); // Bouton burger
const nav = document.querySelector(".main-nav"); // Menu de navigation

// On met le bouton burger sur écoute afin de réagir lors d'un évènement "click"
burger.addEventListener("click", () => {
  nav.classList.toggle("active"); // On modifie la classe du menu lors d'un click = ajoute / enlève
  document.body.style.overflow = nav.classList.contains("active") // On empêche le scroll une fois le menu ouvert
    ? "hidden"
    : "";
});
