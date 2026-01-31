const burger = document.querySelector(".burger");
const nav = document.querySelector(".main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.style.overflow = nav.classList.contains("active")
    ? "hidden"
    : "";
});
