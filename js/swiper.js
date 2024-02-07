let newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    loop:true,
    
    navigation: {
        nextEl: ".new.swiper-button-next",
        prevEl: ".new.swiper-button-prev",
    },
    breakpoints: {

        1280: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0
          }
    },
});


$(document).ready(function () {
    let ww = $(window).width();
    let tubesSwiper = undefined;

    function initSwiper() {

    if (ww < 1280 && tubesSwiper == undefined) {
         
        tubesSwiper = new Swiper(".tubesSwiper", {
        slidesPerView: 3,   
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 10,
        simulateTouch: true,
        loop: true,
        //   autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        //   },
        navigation: {
            nextEl: ".tube.swiper-button-next",
            prevEl: ".tube.swiper-button-prev",
        },
        breakpoints: {

            1280: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10
              }
        },
        });
        } else if (ww >= 1280 && tubesSwiper != undefined) {
            tubesSwiper.destroy();
            tubesSwiper = undefined;
        }
    }

    initSwiper();

    $(window).on('resize', function () {
        ww = $(window).width();
        initSwiper();
    });

});