const ListCategories = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${ListCategories.length} `);
const categoryElementsCount = ListCategories.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}\nElements: ${el.querySelector("ul").childElementCount}`);
});
