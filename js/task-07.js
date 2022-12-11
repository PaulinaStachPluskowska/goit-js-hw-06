const inputRange = document.querySelector("input#font-size-control");
const textChangeable = document.querySelector("span#text");

inputRange.addEventListener("input", (currentValue) => {
  const inputValue = currentValue.currentTarget.value;
  textChangeable.style.fontSize = inputValue + "px";
});
