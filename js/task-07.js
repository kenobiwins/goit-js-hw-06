const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputRange.addEventListener("input", textTransformFromInput);

text.style.fontSize = inputRange.value + "px";
function textTransformFromInput(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};