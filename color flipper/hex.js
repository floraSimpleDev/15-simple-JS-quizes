import {getRandomNumber} from './app.js'

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorButton = document.querySelector(".js-color-button");
const color = document.querySelector(".color");
const length = hex.length;

colorButton.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber(length)];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
