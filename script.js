const body = document.querySelector("body");
body.style.cssText = `
background-color: rgb(244, 194, 194);`;

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
color: rgb(128, 0, 32);
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

const sizeChoice = document.createElement("button");
sizeChoice.textContent = `Side size`;
buttonBar.appendChild(sizeChoice);

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
border: 5px solid rgb(128, 0, 32);
background-color: rgb(244, 194, 194);
`;
main.appendChild(container);

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.style.cssText = `
width: 40px;
height: 40px;
`;
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
  container.appendChild(square);
}
