const button = document.querySelector("button");
const input = document.querySelector("h2");
let checked = false;
button.addEventListener("click", () => {
  if (!checked) {
    input.textContent = "Friend";
    input.style.color = "green";
    button.textContent = "remove Friend";
    button.style.backgroundColor = "red";
    checked = true;
  } else {
    input.textContent = "Stranger";
    input.style.color = "red";
    button.textContent = "Add Friend";
    button.style.backgroundColor = "green";
    checked = false;
  }
});
