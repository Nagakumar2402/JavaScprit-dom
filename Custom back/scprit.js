const elements = document.querySelectorAll(".elements");

elements.forEach((element) => {
  console.log();
  element.addEventListener("mouseenter", () => {
    element.children[1].style.opacity = "1";
  });
  element.addEventListener("mouseleave", () => {
    element.children[1].style.opacity = "0";
  });
  element.addEventListener("mousemove", (move) => {
    element.children[1].style.left = move.x + "px";
    element.children[1].style.top = move.y + "px";
  });
});
