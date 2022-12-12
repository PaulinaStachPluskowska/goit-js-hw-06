function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColorChange = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

buttonColorChange.addEventListener("click", (color) => {
  color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});
