let images = [
    "https://www.thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Pictures-HD-Nature-Download.jpg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=cascade-clouds-cool-wallpaper-210186.jpg&fm=jpg"
];

let index = 0;
const slider = document.getElementById("slider");
slider.src = images[index];
let timer = setInterval(nextImage, 3000);

function nextImage() {
    index = (index + 1) % images.length;
    slider.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    slider.src = images[index];
}
document.getElementById("prevBtn").addEventListener("click", function () {
    prevImage();
    resetTimer();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    nextImage();
    resetTimer();
});
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);
}