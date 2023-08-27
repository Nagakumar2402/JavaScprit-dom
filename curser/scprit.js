const main = document.getElementById("main");
const curser = document.querySelector(".curser");

main.addEventListener("mousemove", (move) => {
  curser.style.left = move.x + "px";
  curser.style.top = move.y + "px";
});
