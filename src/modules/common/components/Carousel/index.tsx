import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper
      className="max-w-[100vw] w-full overflow-hidden"
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};

export { Carousel };
