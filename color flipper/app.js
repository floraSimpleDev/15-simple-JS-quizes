const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const colorButton = document.querySelector(".js-color-button");
const color = document.querySelector(".color");
const length = colors.length;

colorButton.addEventListener("click", () => {
    const randomNumber = getRandomNumber(length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    //color.innerHTML = colors[randomNumber];
});

export function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}