import { NextPageWithLayout } from "@/types/Layouts";
import { PageLayout } from "../src/modules/common/layouts/PageLayout";

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-red-400">
      <p className="font-avenir">Bora</p>
      <p className="font-avant">Biricik</p>
    </div>
  );
};

Home.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Home;
