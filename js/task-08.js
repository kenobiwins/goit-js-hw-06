const form = document.querySelector("form.login-form");

form.addEventListener("submit", sendingLoginForm);

function sendingLoginForm(event) {
    const {
        elements: { email, password }
    } = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    
    event.preventDefault()

    if (email.value && password.value) {
        formData.forEach((value, name) => {
            console.log(`${name} : ${value}`);
        })
        event.currentTarget.reset();
    } else {
        alert("All fields should be filled!!");
    }
};