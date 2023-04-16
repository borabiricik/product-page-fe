import { store } from "@/core/redux";
import { avant, avenir } from "@/fonts/index";
import { AppPropsWithLayout } from "@/types/Layouts";
import { Provider } from "react-redux";
import "swiper/css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <div className={`${avant.variable} ${avenir.variable}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Provider>
  );
}

export default MyApp;
