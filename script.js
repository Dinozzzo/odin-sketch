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

function originalSquale() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.cssText = `
width: 40px;
height: 40px;
`;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "rgb(107, 81, 42)";
    });
    container.appendChild(square);
  }
}

originalSquale();

const squale = document.createElement("button");
squale.textContent = `Choose a squale.`;
squale.addEventListener("click", () => {
  container.innerHTML = "";
  let userSquale = prompt(`What squale do you choose, between 1 to 64?`);
  if (userSquale > 64) {
    alert(`Squale can't be over 64`);
    originalSquale();
  } else {
    let calc = 640 / userSquale;
    let iSquale = userSquale * userSquale;
    console.log(userSquale);
    for (let i = 0; i < iSquale; i++) {
      const square = document.createElement("div");
      square.style.cssText = `
    width: ${calc}px;
    height: ${calc}px;
    `;
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "rgb(107, 81, 42)";
      });
      container.appendChild(square);
    }
  }
});
buttonBar.appendChild(squale);
