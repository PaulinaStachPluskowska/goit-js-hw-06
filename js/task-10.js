function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");
const inputValue = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonRemove = document.querySelector("button[data-destroy]");

const amount = inputValue.value;

buttonCreate.addEventListener("click", createBoxes);
buttonRemove.addEventListener("click", removeBoxes);

//value.addEventListener("input", (el) => valueAtInput(el));
let size = 30;

createBoxes = () => {
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML("beforeend", `<div style="background-color: ${getRandomHexColor()}; height: ${size}px; width: ${size}px"></div>`);
  }
  // //  let box = document.createElement("div");
  // let container = Array.from(boxes.children);

  // container.reduce((previousSize, box, tableIndex) => {
  //   let size = previousSize;
  //   box.style.height = 30 + size * 10 + "px";
  //   box.style.width = 30 + size * 10 + "px";
  //   box.style.background = getRandomHexColor();
  //   //boxes.append(box);

  size += 10;
  //return size;
  //}, 0);
};

destroyBoxes = () => {};
// function removeBoxes() {
//   boxes.textContent = "";
// }

// function valueAtInput(el) {
//   amount = el.target.value;
// }

//buttonRemove.addEventListener("click", () => boxes.replaceChildren());
