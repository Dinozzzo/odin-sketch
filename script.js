const body = document.querySelector("body");
body.style.cssText = `
background-color: rgb(244, 194, 194);`;

const header = document.createElement("div");
header.style.cssText = `
width: 100%;
height: 150px;
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
color: rgb(128, 0, 32);
`;
header.appendChild(title);

// const leftDiv = createElement("div");
// const rightDiv = createElement("div");

// leftDiv.style.cssText = `
// width: 500px;`;

// rightDiv.style.cssText = `
// width: auto`;

// body.appendChild(leftDiv);
// body.appendChild(rightDiv);

// rightDiv.appendChild(container);

// const container = document.querySelector(".container");

//container.style.cssText = `
// display: flex;
// flex-wrap: wrap;
// width: 640px;
// height: 640px;
// border: 5px solid rgb(128, 0, 32);
// background-color: rgb(244, 194, 194);`;

// for (let i = 0; i < 256; i++) {
//   const square = document.createElement("div");
//   square.style.cssText = `
// width: 40px;
// height: 40px;
// `;
//   container.appendChild(square);

//   square.addEventListener("mouseover", () => {
//     square.style.backgroundColor = "red";
//   });
// }
