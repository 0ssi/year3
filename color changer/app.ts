const button = document.querySelector(".button-div")

button?.addEventListener("click", arrayScroll);


let colors:string[] = ["white", "black", "red", "green", "blue",]
let arrayColor:number = 0;


function arrayScroll() {
    arrayColor++;
    if(arrayColor >= (colors.length)) arrayColor = 0;
    document.body.style.background = colors[arrayColor]
}



