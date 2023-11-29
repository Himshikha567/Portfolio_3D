// let slider = document.querySelector('.carousel-slider');
// let currentSlide = 0;

// document.querySelector('.carousel-button-next').addEventListener('click', function() {
//  slider.style.transform = 'translateX(-' + (currentSlide + 1) * 100 + '%)';
//  currentSlide = (currentSlide + 1) % 3;
// });

// document.querySelector('.carousel-button-prev').addEventListener('click', function() {
//  slider.style.transform = 'translateX(-' + (currentSlide - 1 + 3) % 3 * 100 + '%)';
//  currentSlide = (currentSlide - 1 + 3) % 3;
// });

const slider = document.querySelector('.carousel-slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
let currentSlide = 0;

prevButton.addEventListener('click', () => {
 currentSlide--;
 if (currentSlide < 0) {
 currentSlide = slides.length - 1;
 }
 updateSlider();
});

nextButton.addEventListener('click', () => {
 currentSlide++;
 if (currentSlide >= slides.length) {
 currentSlide = 0;
 }
 updateSlider();
});

function updateSlider() {
 slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}