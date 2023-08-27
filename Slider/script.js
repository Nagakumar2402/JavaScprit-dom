const menuFold = document.querySelector(".menu-fold");
const menuUnfold = document.querySelector(".menu-unfold");
const container = document.querySelector(".container");

menuFold.addEventListener("click", () => {
  container.style.width = "30vw";
});

menuUnfold.addEventListener("click", () => {
  container.style.width = "0";
});
