document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;
    const items = slider.querySelectorAll('.slider-item');
    const totalItems = items.length;

    function updateSlider() {
        const itemWidth = items[0].clientWidth;
        slider.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    // Inicializa o slider
    updateSlider();
});
