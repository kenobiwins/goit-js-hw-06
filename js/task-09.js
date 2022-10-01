const changeBtn = document.querySelector(".change-color");
const colorHexCode = document.querySelector(".color");

changeBtn.addEventListener("click", changeColor);

function changeColor(event) {
    document.body.style.backgroundColor = getRandomHexColor();
    colorHexCode.textContent = document.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};