$(document).ready(function () {
    var currentIndex = 0;
    var slideWidth = $('.product-slide').width();

    $('.next-btn').click(function () {
        if (currentIndex < $('.product-slide').length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    $('.prev-btn').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = $('.product-slide').length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        var translateXValue = -currentIndex * slideWidth + 'px';
        $('.carousel-inner').css('transform', 'translateX(' + translateXValue + ')');
    }

    setInterval(function () {
        $('.next-btn').click();
    }, 5000); // Adjust the interval as needed
});
