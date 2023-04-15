import { Carousel } from "@/components/Carousel";
import { Typhography } from "@/components/Typhography";
import { PageLayout } from "@/layouts/PageLayout";
import { NextPageWithLayout } from "@/types/Layouts";

const Home: NextPageWithLayout = () => {
  return (
    <div className="overflow-hidden">
      <div className="px-[120px]">
        <Typhography className="text-h4 font-bold mb-3" font="avant" as="h4">
          Everyday items, we have something to suit every occasion.
        </Typhography>

        <Typhography type="secondary" as="p" className="mb-8 w-[90%]">
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </Typhography>

        <Typhography className="text-xs underline underline-offset-[5px] font-black">
          Shop All Everyday Items
        </Typhography>
      </div>
      <Carousel />
    </div>
  );
};

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Home;
