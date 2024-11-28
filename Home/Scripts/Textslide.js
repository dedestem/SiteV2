document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.text-slide');
    let currentIndex = 0;

    function showNextSlide() {
        // Get the current and next slide
        const currentSlide = slides[currentIndex];
        const nextIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[nextIndex];

        // Update classes for animation
        currentSlide.classList.remove('active');
        currentSlide.classList.add('exit');
        nextSlide.classList.add('active');

        // Reset the exiting slide after animation
        setTimeout(() => currentSlide.classList.remove('exit'), 1000);

        // Update the index
        currentIndex = nextIndex;
    }

    // Initialize the first slide
    slides[currentIndex].classList.add('active');
    setInterval(showNextSlide, 3000);
});