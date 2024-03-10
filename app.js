const swiperOne = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
  },

  spaceBetween: 20,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    512: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});
