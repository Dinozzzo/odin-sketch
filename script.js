const body = document.querySelector("body");
body.style.cssText = `
background-color:rgb(224, 207, 149);
margin: 0;`;

const header = document.createElement("div");
header.style.cssText = `
height: 125px;
display: flex;
justify-content: center;
align-items: center;
font-size: 27.5px;
text-transform: uppercase;
`;
body.appendChild(header);

const title = document.createElement("h1");
title.textContent = `Etch-a-Sketch`;
title.style.cssText = `
color: rgb(107, 81, 42);
`;
header.appendChild(title);

const buttonBar = document.createElement("div");
buttonBar.style.cssText = `
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 25px`;
body.appendChild(buttonBar);

const main = document.createElement("div");
main.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
`;
body.appendChild(main);

const container = document.querySelector(".container");
container.style.cssText = `
display: flex;
flex-wrap: wrap;
width: 640px;
height: 640px;
border: 5px solid rgb(107, 81, 42);
background-color: rgb(255, 255, 255);
`;
main.appendChild(container);

function createGrid(size) {}
// for (let i = 0; i < 251; i++) {
//   const square = document.createElement("div");
//   square.style.cssText = `
// width: 40px;
// height: 40px;
// `;
//   square.addEventListener("mouseover", () => {
//     square.style.backgroundColor = "rgb(107, 81, 42";
//   });
//   container.appendChild(square);
// }

// const sizeChoice = document.createElement("button");
// sizeChoice.textContent = `Scale`;
// sizeChoice.style.cssText = `
// font-size: 25px`;
// buttonBar.appendChild(sizeChoice);
// sizeChoice.addEventListener("click", () => {
//   prompt(`Choose a scale.`);
// });
