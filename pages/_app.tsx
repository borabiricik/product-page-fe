import { avant, avenir } from "@/fonts/index";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${avant.variable} ${avenir.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
