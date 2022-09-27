const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.getElementById('ingredients');

const makeIngridientsList = array => {
    const elem = array.map(el => {
        const listItemEl = document.createElement('li');
        listItemEl.classList.add('item')
        listItemEl.textContent = el;
        return listItemEl
    });
    return elem;
}

const elements = makeIngridientsList(ingredients);

ingredientsListEl.append(...elements)


