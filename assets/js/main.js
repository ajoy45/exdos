(function ($) {
    "use strict";
    // mobile menu 
    var tpMobileMenu = $('.tp-mobile-menu-active > ul').clone();
    var tpSideMenu = $('.tp-offcanvas-menu nav');
    tpSideMenu.append(tpMobileMenu);
    if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
        $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
        } else {
            $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });
    // offcanvas
    $(".tp-header-offcanvas").on("click", function () {
        $(".tp-offcanvas").addClass("tp-offcanvas-open");
        $(".tp-all-overlay").addClass("tp-all-overlay-open");
    });
    $(".tp-offcanvas-close,.tp-all-overlay").on("click", function () {
        $(".tp-offcanvas").removeClass("tp-offcanvas-open");
        $(".tp-all-overlay").removeClass("tp-all-overlay-open");
    });


    // data background-img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")

    })
    // data background color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))

    })
    // data  color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))

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
    // testimonial h-5 slider
    var swiper = new Swiper(".tp-testimonial-h-5-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".tp-testimonial-5-right",
            prevEl: ".tp-testimonial-5-left",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 4,

            },
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
    // brand normal slider
    var swiper = new Swiper(".tp-brand-normal-active", {
        spaceBetween: 30,

        navigation: {
            nextEl: ".tp-team-swiper-next",
            prevEl: ".tp-team-swiper-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,

            },

            992: {
                slidesPerView: 4,

            },
            1200: {
                slidesPerView: 5,

            },
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

    // h-4 portfolio slider
    var swiper = new Swiper(".tp-portfolio-slider-active", {
        spaceBetween: 30,

        navigation: {
            nextEl: ".tp-team-swiper-next",
            prevEl: ".tp-team-swiper-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 2,
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