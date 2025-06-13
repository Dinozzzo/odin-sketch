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

// function originalScale() {
//   for (let i = 0; i < 256; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     square.style.cssText = `
// width: 40px;
// height: 40px;
// `;
//     square.addEventListener("mouseover", () => {
//       square.style.backgroundColor = "rgb(107, 81, 42)";
//     });
//     container.appendChild(square);
//   }
// }

// originalScale();

// const scale = document.createElement("button");
// scale.textContent = `Scale`;
// scale.addEventListener("click", () => {
//   container.innerHTML = "";
//   let userScale = prompt(`Choose a scale between 1 to 64?`);
//   if (userScale > 64) {
//     alert(`Scale can't be over 64`);
//     originalScale();
//   } else {
//     let calc = 640 / userScale;
//     let iScale = userScale * userScale;
//     console.log(userScale);
//     for (let i = 0; i < iScale; i++) {
//       const square = document.createElement("div");
//       square.classList.add("square");
//       square.style.cssText = `
//     width: ${calc}px;
//     height: ${calc}px;
//     `;
//       square.addEventListener("mouseover", () => {
//         square.style.backgroundColor = "rgb(107, 81, 42)";
//       });
//       container.appendChild(square);
//     }
//   }
// });
// buttonBar.appendChild(scale);

// const rainbowButton = document.createElement("button");
// rainbowButton.textContent = `Rainbow Colors`;
// rainbowButton.addEventListener("click", () => {
//   const allSquares = container.querySelectorAll(".square");
//   allSquares.forEach((square) => {
//     square.addEventListener("mouseover", () => {
//       let r = Math.floor(Math.random() * 256);
//       let g = Math.floor(Math.random() * 256);
//       let b = Math.floor(Math.random() * 256);
//       square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     });
//   });
// });
// buttonBar.appendChild(rainbowButton);

// const eraseButton = document.createElement("button");
// eraseButton.textContent = `Erase`;
// eraseButton.addEventListener("click", () => {
//   const allSquares = container.querySelectorAll(".square");
//   allSquares.forEach((square) => {
//     square.addEventListener("click", () => {
//       square.style.backgroundColor = `white`;
//     });
//   });
// });
// buttonBar.appendChild(eraseButton);

let currentMode = `default`;
const allSquares = document.querySelectorAll(".square");

// Function for differents modes
function handleHover(event) {
  if (currentMode === `default`) {
    event.target.style.backgroundColor = "rgb(107, 81, 42)";
  } else if (currentMode === `rainbow`) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else if (currentMode === `erase`) {
    event.target.style.backgroundColor = `white`;
  }
}

// Function creating the scales
function originalScale(size = 16) {
  container.innerHTML = "";
  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 1px solid rgb(224, 207, 149);
      `;
    square.addEventListener("mousedown", handleHover);
    container.appendChild(square);
  }
}

originalScale();

// Button asking the user what scale he wants between 1 to 64
const scaleButton = document.createElement("button");
scaleButton.textContent = "Scale";
scaleButton.addEventListener("click", () => {
  let userInput = prompt("Choose a scale between 8 and 64:");
  let scale = parseInt(userInput);

  if (scale >= 8 && scale <= 64) {
    originalScale(scale);
  } else {
    alert("Invalid scale. Please choose between 8 and 64.");
  }
});
buttonBar.appendChild(scaleButton);

const defaultButton = document.createElement("button");
defaultButton.textContent = `Default`;
defaultButton.addEventListener("click", () => {
  currentMode = `default`;
});
buttonBar.appendChild(defaultButton);

const rainbowButton = document.createElement("button");
rainbowButton.textContent = `Rainbow`;
rainbowButton.addEventListener("click", () => {
  currentMode = `rainbow`;
});
buttonBar.appendChild(rainbowButton);

const eraseButton = document.createElement("button");
eraseButton.addEventListener("click", () => {
  currentMode = `erase`;
});
eraseButton.textContent = `Erase`;
buttonBar.appendChild(eraseButton);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.style.cssText = `
font-size: 25px;
background-color:rgb(224, 207, 149);
border-radius: 20px;
padding: 10px;
margin: 50px;
border: 4px solid rgb(107, 81, 42);
color: rgb(107, 81, 42)`;
});
