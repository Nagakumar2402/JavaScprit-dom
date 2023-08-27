const image = document.querySelector("img");
const icon = document.querySelector("i");
image.addEventListener("dblclick", () => {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = "0.7";
  setTimeout(() => {
    icon.style.opacity = "0";
  }, 1000);
  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
