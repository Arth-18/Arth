document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const surpriseButton = document.getElementById('surpriseButton');
    const fireworks = document.getElementById('fireworks');

    let currentImage = 0;

    function showImage(index) {
        images[currentImage].style.opacity = 0;
        images[index].style.opacity = 1;
        currentImage = index;
    }

    function slide() {
        const nextImage = (currentImage + 1) % images.length;
        showImage(nextImage);
    }

    setInterval(slide, 5000); // Change image every 5 seconds

    surpriseButton.addEventListener('click', function () {
        const message = document.getElementById('message');
        message.innerText = "Surprise! 🎉 Happy New Year!";
        showImage(0); // Show the first image

        // Trigger fireworks animation
        fireworks.style.display = 'block';
        fireworks.style.animation = 'fireworks 5s ease-in-out forwards';

        setTimeout(function () {
            message.innerText = "Even though I'm far away, my warm wishes are with you.";
            fireworks.style.display = 'none';
        }, 7000); // Reset the message and hide fireworks after 7 seconds
    });
});
