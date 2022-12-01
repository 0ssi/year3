const button = document.querySelector(".button-div");
button?.addEventListener("click", arrayScroll);
let colors = [
    "white",
    "black",
    "red",
    "green",
    "blue", 
];
let arrayColor = 0;
function arrayScroll() {
    arrayColor++;
    if (arrayColor >= colors.length) arrayColor = 0;
    document.body.style.background = colors[arrayColor];
}

//# sourceMappingURL=index.6b86260e.js.map
