const controlPanel = document.getElementById("controls");
const inputField = controlPanel.firstElementChild;
const createBtn = controlPanel.querySelector("button[data-create]");
const destroyBtn = controlPanel.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let incrementValue = 0;
    amount = inputField.value;

    if (amount > inputField.max || amount < inputField.min) {
       return alert(`Value should be bigger then ${inputField.min} and less ${inputField.max} `) 
    }

    if (amount <= inputField.max || amount >= inputField.min) {
        for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = 30 + incrementValue + "px";
        div.style.height = 30 + incrementValue + "px";
        div.style.backgroundColor = getRandomHexColor();
        incrementValue += 10;
        boxesContainer.append(div);
    }
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