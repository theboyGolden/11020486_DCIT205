// script.js
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('img');
let currentIndex = 0;

function shuffleImages() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 400; // Adjust based on the image width
    imageContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(shuffleImages, 3000); // Adjust the time interval (in milliseconds)
