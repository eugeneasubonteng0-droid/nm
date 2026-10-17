const images=[
    "DB.jpeg",
    "CBD.jpeg",
    "t.png",
    "yield.webp",
    "EN.jpeg"

];

let currentIndex = 0;

const main = document.querySelector("main");

function changeImages() {
    currentIndex++;

    if
    (currentIndex >= images.length){
        currentIndex= 0;
    }

    main.style.backgroundImage = 'url("${images[currentIndex]}")';

}

setInterval(changeImage,1000);