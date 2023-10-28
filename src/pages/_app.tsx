import Footer from "@/components/Footer";
import { LiveChatWidget } from "@livechat/widget-react";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "../lib/gtag";
import * as fbq from "../lib/fpixel";
import Script from "next/script";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Google Analytics
  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Meta Pixel
  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Head>
        <title>My Exclusive Removals</title>
      </Head>
      <LiveChatWidget license="15067299" group="0" />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
