(function ($) {
    "use strict";
    // testimonial slider
    var swiper = new Swiper(".tp-testimonial-active", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".tp-testimonial-slider-right",
            prevEl: ".tp-testimonial-slider-left",
        },

    });

    // brand slider
    var swiper = new Swiper(".tp-brand-top-active", {
        slidesPerView: "auto",
        spaceBetween: 150,
        loop: true,
        // freemode: true,
        speed: 2000,
        centeredSlides: true,
        allowTouchMove: false,

        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
    // Team slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: {
            nextEl: ".tp-team-swiper-next",
            prevEl: ".tp-team-swiper-prev",
        },

    });

})(jQuery)