let span = document.querySelector("#value");
let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  span.innerHTML = counterValue;
  console.log(counterValue);
};
const increment = () => {
  counterValue += 1;
  span.innerHTML = counterValue;
  console.log(counterValue);
};
buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
