import Swiper from "swiper";
// import { Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/scss";
// import "swiper/scss/pagination";

// Swiper.use([Pagination]);

export const HowWeDoSlider = () => {
  new Swiper(".howWeDoSwiper", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 12,
      },
      480: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },
    //  pagination: {
    //    el: ".swiper-pagination",
    //    dynamicBullets: true,
    //    clickable: true,
    //  },
  });
};
