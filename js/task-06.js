const input = document.getElementById("validation-input");

input.addEventListener("blur", validation);

function validation(event) {
    const validLength = Number(input.dataset.length);
    const currentLength = Number(event.currentTarget.value.length);
    
    if (currentLength === validLength) {
        input.classList.remove("invalid")
        input.classList.add("valid");
    }

    if (currentLength !== validLength) {
        input.classList.add("invalid")
    }
    if (!currentLength) {
        input.classList.remove("valid", "invalid");
    }
}