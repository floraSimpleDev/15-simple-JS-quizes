let count = 0;
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.js-button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonClass = event.target.classList;

        if (buttonClass.contains("decrease-button")) {
            count--;
        } else if (buttonClass.contains("increase-button")) {
            count++;
        } else {
            count = 0;
        }

        value.textContent = count;

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "#222";
        }
    });
});


