import { Carousel } from "@/components/Carousel";
import { Typhography } from "@/components/Typhography";
import { useAppSelector } from "@/core/redux";
import { PageLayout } from "@/layouts/PageLayout";
import { ProductCard } from "@/product/components/ProductCard";
import { NextPageWithLayout } from "@/types/Layouts";
import { SwiperSlide } from "swiper/react";

const Home: NextPageWithLayout = () => {
  const { products } = useAppSelector((state) => state.product);
  return (
    <div>
      <div className="px-[120px]">
        <Typhography className="text-h4 font-bold mb-3" font="avant" as="h4">
          Everyday items, we have something to suit every occasion.
        </Typhography>

        <Typhography type="secondary" as="p" className="mb-8 w-[90%]">
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </Typhography>

        <Typhography className="text-xs underline underline-offset-[5px] font-black mb-6">
          Shop All Everyday Items
        </Typhography>
      </div>
      <Carousel className="ml-[120px]" spaceBetween={32} slidesPerView={2.4}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Home;
