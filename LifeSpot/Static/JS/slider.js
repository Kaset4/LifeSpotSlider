let btn_left = document.querySelector(".slider-left-button");
let btn_right = document.querySelector(".slider-right-button");

let images = document.querySelectorAll(".slider-card");

let i = 0;


if (i >= images.length) {
    i = 0;
}

btn_left.onclick = function () {
    images[i].style.display = 'none';
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
};

btn_right.onclick = function () {
    images[i].style.display = 'none';
    i = i + 1;
    if (i > images.length - 1) {
        i = 0;
    }
    images[i].style.display = 'block';
};