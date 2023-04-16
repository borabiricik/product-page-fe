import { store } from "@/core/redux";
import { avant, avenir } from "@/fonts/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${avant.variable} ${avenir.variable}`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
