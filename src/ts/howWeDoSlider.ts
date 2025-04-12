import Swiper from "swiper";
// import { Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/scss";
// import "swiper/scss/pagination";

// Swiper.use([Pagination]);

export const HowWeDoSlider = () => {
  const swiper = new Swiper(".howWeDoSwiper", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    //  pagination: {
    //    el: ".swiper-pagination",
    //    dynamicBullets: true,
    //    clickable: true,
    //  },
  });
};
