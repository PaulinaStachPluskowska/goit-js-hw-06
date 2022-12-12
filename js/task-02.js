const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

let list = document.getElementById("ingredients");

ingredients.forEach((el) => {
  let li = document.createElement("li");
  li.innerText = el;
  li.classList.add("item");
  list.appendChild(li);
});

console.log(`Ingredients: ${list}`);
