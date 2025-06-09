const body = document.querySelector("body");
const container = document.querySelector(".container");

body.style.cssText = `
background-color: rgb(244, 194, 194);`;

container.style.cssText = `
display: flex;
flex-wrap: wrap;
width: 640px;
height: 640px;
border: 5px solid rgb(128, 0, 32);
background-color: rgb(244, 194, 194);`;

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.style.cssText = `
width: 40px;
height: 40px;
`;
  container.appendChild(square);

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}

const title = document.createElement("h1");
body.prepend(title);
title.textContent = `Etch-a-Sketch`;

title.style.cssText = `
color: rgb(128, 0, 32);`;
