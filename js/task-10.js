const controlPanel = document.getElementById("controls");
const inputField = controlPanel.firstElementChild;
const createBtn = controlPanel.querySelector("button[data-create]");
const destroyBtn = controlPanel.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let incrementValue = 0;
    amount = Number(inputField.value);
    const min = Number(inputField.min);
    const max = Number(inputField.max);
    // const container = document.createDocumentFragment();
    
    if (amount <= max && amount >= min) {
        const container = [];
        for (let i = 0; i < amount; i++) {
            const div = document.createElement("div");
            div.style.width = 30 + incrementValue + "px";
            div.style.height = 30 + incrementValue + "px";
            div.style.backgroundColor = getRandomHexColor();
            incrementValue += 10;
            container.push(div);
            // console.log(...container);
    }
    boxesContainer.append(...container);
} else {
    alert(`Value should be bigger then ${min} and less then the number of ${max} `) 
}
};

function destroyBoxes(event) {
    boxesContainer.innerHTML = "";
    inputField.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}