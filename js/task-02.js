const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function handleMarkup(ingredients) {
  const ulEl = document.querySelector('#ingredients');

 const ingMap = ingredients.map( ingredient => {
    const liEl = document.createElement("li");
    liEl.classList.add("item")
    liEl.textContent = ingredient ;
    return liEl;
  });
  ulEl.append(...ingMap);
}
handleMarkup(ingredients);


