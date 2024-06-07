
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView:2,

        },
        950:{
            slidesPerView:3,
        }
      }
  });