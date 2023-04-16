import { Swiper, SwiperProps } from "swiper/react";

const Carousel = ({ children, ...props }: SwiperProps) => {
  return <Swiper {...props}>{children}</Swiper>;
};

export { Carousel };
