"use script";


const imageEle = document.querySelector("image");
const nextBtnEle = document.getElementById("btn-next");
const previousBtnEle = document.getElementById("btn-previous");

// global variable
let index = 0;
const imagesArr = [
    "image0.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
];
const str = "./images";

// functions
function init() {
    imageEle.src = `${str}${imagesArr[0]}`;
}

const changeImages = () => {
    if (index < 0) {
    index = imagesArr.length - 1;
    } else if (index >= 0 && index < imagesArr.length) {
    } else if (index == imagesArr.length) {
    index = 0;
    }
    imageEle.src = `${str}${imagesArr[index]}`;
};

// eventlistener
nextBtnEle.addEventListener("click", () => {
    index += 1;
    changeImages();
});

previousBtnEle.addEventListener("click", () => {
    index -= 1;
    changeImages();
});

init();