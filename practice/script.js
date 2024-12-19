$(document).ready(function () {
    const $sliderImages = $('.slider-images');
    const $imageWraps = $('.image-wrap');
    const totalImages = $imageWraps.length;
    let currentIndex = 0;

    // Move to the next image
    $('.right-arrow').click(function () {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Move to the previous image
    $('.left-arrow').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    $('.image-wrap').click(function () {
        const link = $(this).data('link');
        window.open(link, '_blank');
    });

    // Update slider position
    function updateSlider() {
        const offset = -currentIndex * 100; // Each image takes 100% of the slider width
        $sliderImages.css('transform', `translateX(${offset}%)`);
    }
});
