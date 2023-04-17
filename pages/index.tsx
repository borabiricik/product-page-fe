import { Carousel } from "@/components/Carousel";
import { Typhography } from "@/components/Typhography";
import { useWindowSize } from "@/core/hooks/useWindowSize";
import { useAppSelector } from "@/core/redux";
import { PageLayout } from "@/layouts/PageLayout";
import { ProductCard } from "@/product/components/ProductCard";
import { NextPageWithLayout } from "@/types/Layouts";
import { SwiperSlide } from "swiper/react";

const Home: NextPageWithLayout = () => {
  const { products } = useAppSelector((state) => state.product);
  const { width } = useWindowSize();
  return (
    <div>
      <div className="mx-6 lg:px-[120px]">
        <Typhography
          className="text-xl leading-7 lg:text-h4 font-bold mb-3 text-white lg:text-black"
          font="avant"
          as="h4"
        >
          Everyday {width >= 1024 ? "items" : "tops"}, we have something to suit
          every occasion.
        </Typhography>

        <Typhography
          type="secondary"
          as="p"
          className="mb-8 w-[90%] hidden lg:block"
        >
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </Typhography>

        <Typhography className="text-xs font-normal lg:font-black underline underline-offset-[5px] mb-8 lg:mb-6 text-white lg:text-black">
          Shop All Everyday Items
        </Typhography>
      </div>
      <div className="ml-6 lg:ml-[120px]">
        <Carousel
          spaceBetween={width >= 1204 ? 32 : 12}
          slidesPerView={width >= 1204 ? 2.4 : 2.15}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Home;
