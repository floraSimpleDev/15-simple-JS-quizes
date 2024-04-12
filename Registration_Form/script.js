const form = document.querySelector(".form");

//check email address
const emailInput = form.querySelector(".email-input");
const emailError = document.querySelector(".email-error");

function checkEmail() {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailError.classList.add("invalid");
    }
    emailError.classList.remove("invalid");
}

//show and hide password
const showHide = document.querySelectorAll(".show-hide");

showHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pwdInput = eyeIcon.parentElement.querySelector("input");
        if (pwdInput.type === "password") {
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            pwdInput.type = "text";
        } else {
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            pwdInput.type = "password";
        }
    });
});

//check password strength
const passwordField = document.querySelector(".password-field");
const passwordInput = passwordField.querySelector("input");
const passwordError = document.querySelector(".password-error");

function checkPassword() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordInput.value.match(passwordPattern)) {
        return passwordError.classList.add("invalid");
    }
    passwordError.classList.remove("invalid");
}

//confirm password
const cPasswordField = document.querySelector(".con-password-field");
const cPasswordInput = cPasswordField.querySelector("input");
const cPasswordError = document.querySelector(".con-password-error");

function confirmPassword() {
    if (passwordInput.value !== cPasswordInput.value || cPasswordInput.value === "") {
        return cPasswordError.classList.add("invalid");
    }
    cPasswordError.classList.remove("invalid");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkEmail();
    checkPassword();
    confirmPassword();
    emailInput.addEventListener("keyup", checkEmail);
    passwordInput.addEventListener("keyup", checkPassword);
    cPasswordInput.addEventListener("keyup", confirmPassword);

    if (!emailError.classList.contains("invalid") &&
        !passwordError.classList.contains("invalid") &&
        !cPasswordError.classList.contains("invalid")) {
            location.href = form.getAttribute("action");
        }
});