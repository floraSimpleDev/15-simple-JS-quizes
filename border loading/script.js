const container = document.querySelector(".container"),
    percent = document.querySelector("#percent");
let perVal = 0;
let increament = setInterval(() => {
    perVal++;
    percent.textContent = `${perVal}%`;
    if (perVal == 100) {
        clearInterval = increament;
        container.classList.remove("active");
    }
}, 100);