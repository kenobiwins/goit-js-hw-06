const form = document.querySelector("form.login-form");

form.addEventListener("submit", sendingLoginForm);

function sendingLoginForm(event) {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    const formData = new FormData(event.currentTarget);
    if (email.value !== "" || password.value !== "") {
        formData.forEach((value, name) => {
            console.log(`${name} : ${value}`);
        })
    };
    if (email.value === "" || password.value === "") {
        alert("All fields should be filled!!");
    }
    event.currentTarget.reset();
};