const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initially, display the first slide
showSlide(currentSlide);

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);
