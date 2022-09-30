const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", outputOperation);

function outputOperation(event) {
    output.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
}