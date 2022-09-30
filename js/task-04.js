// get ref on buttons from document 
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

// get ref on counter value 
const value = document.getElementById('value');

//do dynamic value from HTML markup
let counterValue = Number(value.textContent);

// decrement / increment value 
// counterValue -1;
const decrement = (event) => value.textContent = counterValue -= 1;
// counterValue +1;
const increment = (event) => value.textContent = counterValue += 1;

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
