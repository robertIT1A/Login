var swiper = new Swiper(".mySwiper", {
    loop: true,
      spaceBetween: 30,
      centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        300: {
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        }
        ,
        900:{
            slidesPerView:3,
        }
      }
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    });