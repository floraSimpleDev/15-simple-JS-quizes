const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowButtons = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false;
let startX;
let startScrollLeft;
let timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        carousel.scrollLeft += button.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (event) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = event.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (event) => {
    if (!isDragging) return;
    //scrollLeft sets or returns the number of pixels an element's content is scrolled horizontally
    carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {carousel.scrollLeft += firstCardWidth}, 2500);
}

autoPlay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth * 2;
        carousel.classList.remove("no-transition");
    }
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
carousel.addEventListener("mouseleave", autoPlay);