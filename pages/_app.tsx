import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import store from "../utils/store";
import { Provider } from "react-redux";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <BackButton />
        <Component {...pageProps} />
        <Navbar />
      </Provider>
    </>
  );
}

export default MyApp;
