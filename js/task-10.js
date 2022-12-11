function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("div#boxes");
const value = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonRemove = document.querySelector("button[data-destroy]");

const amount = document.querySelector('input[type="number"]').value;

buttonCreate.addEventListener("click", () => createBoxes(amount));
buttonRemove.addEventListener("click", () => removeBoxes(amount));

//value.addEventListener("input", (el) => valueAtInput(el));

function createBoxes(amount) {
  let previousSize;
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML("afterbegin", '<div class="boxes"></div>');
  }
  //  let box = document.createElement("div");
  let container = Array.from(boxes.children);

  container.reduce((previousSize, box, tableIndex) => {
    let size = previousSize;
    box.style.height = 30 + size * 10 + "px";
    box.style.width = 30 + size * 10 + "px";
    box.style.background = getRandomHexColor();
    //boxes.append(box);
    size = previousSize + 1;
    return size;
  }, 0);
}

// function removeBoxes() {
//   boxes.textContent = "";
// }

// function valueAtInput(el) {
//   amount = el.target.value;
// }

buttonRemove.addEventListener("click", () => boxes.replaceChildren());
