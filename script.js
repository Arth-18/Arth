const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Wrap around to the last image
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Wrap around to the first image
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
