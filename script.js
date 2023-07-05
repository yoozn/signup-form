const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector(".submit-button");

confirmPassword.addEventListener("input", (e) => {
    if ((confirmPassword.value == password.value) && (confirmPassword.value.length > 0)) {
        confirmPassword.classList.remove("error");
        password.classList.remove("error");
    } else {
        confirmPassword.classList.add("error");
        password.classList.add("error");
    }
})

submit.addEventListener("click", (e)=> {
    if (password.value != confirmPassword.value) {
        e.preventDefault();
    }
})
