(function ($) {
    "use strict";
    // data background-img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")

    })
    // data background color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))

    })
    // magnify popup
    $('.popup-image').magnificPopup({
        type: 'image'

    });
    $('.popup-video').magnificPopup({
        type: 'iframe'

    });
    // testimonial slider
    var swiper = new Swiper(".tp-testimonial-active", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".tp-testimonial-slider-right",
            prevEl: ".tp-testimonial-slider-left",
        },

    });
    // testimonial slider 2
    var swiper_thumb = new Swiper(".tp-testimonial-thumb-active", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        centeredSlides: true,
        watchSlidesProgress: true,
    });
    var swiper2_content = new Swiper(".tp-testimonial-content-active", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_thumb,
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
    // brand slider title
    var swiper = new Swiper(".tp-brand-title-active", {
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        speed: 2000,
        centeredSlides: true,
        allowTouchMove: false,

        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
    // Team slider
    var swiper = new Swiper(".tp-team-slider-active", {
        spaceBetween: 30,

        navigation: {
            nextEl: ".tp-team-swiper-next",
            prevEl: ".tp-team-swiper-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            992: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 4,

            },
        },

    });

})(jQuery)