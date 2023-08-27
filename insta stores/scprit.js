const stories = document.querySelector(".stories");
const fullScreen = document.querySelector(".fullScreen");

const arr = [
  {
    dp: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
    story:
      "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1543756605-a90da919605a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    story:
      "https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 ",
    story:
      "https://images.unsplash.com/photo-1580100124280-a40415d0ab21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
  },
];
let output = "";
arr.forEach((element, index) => {
  output += `

  <div class="story">
    <img id="${index}" src="${element.dp}" alt="">
  </div>
  `;
});

stories.innerHTML = output;
stories.addEventListener("click", (e) => {
  let story = arr[e.target.id].story;
  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${story})`;
  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 5000);
});
