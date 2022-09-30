const inputRange = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputRange.addEventListener("input", textTransformFromInput);

function textTransformFromInput(event) {
    // const rangeValue = event.currentTarget.value;
    text.style.fontSize = `${event.currentTarget.value}px`;
};