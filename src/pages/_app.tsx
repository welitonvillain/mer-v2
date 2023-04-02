import Footer from "@/components/Footer";
import { LiveChatWidget } from "@livechat/widget-react";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Head from "next/head";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Exclusive Removals</title>
      </Head>
      <LiveChatWidget license="15067299" group="0" />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
