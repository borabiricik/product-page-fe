import { avant, avenir } from "@/fonts/index";
import type { AppPropsWithLayout } from "@/types/Layouts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <div className={`${avant.variable} ${avenir.className}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
