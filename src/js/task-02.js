const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function handleMarkup(ingredients) {
  const ul = document.querySelector('#ingredients');
  const liElements = [];
  ingredients.map( ingredient => {
    const liEl = document.createElement("li");
    liEl.classList.add("item")
    liEl.textContent = ingredient;
    liElements.push(liEl);
  });
  ul.append(...liElements);
}
handleMarkup(ingredients);