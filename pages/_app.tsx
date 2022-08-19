import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackButton />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;
