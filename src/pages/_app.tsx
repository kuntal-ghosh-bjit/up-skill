import type { AppProps } from "next/app";
import router from "next/router";
import "@/styles/index.scss";
import { useEffect, useState } from "react";
import { LoadContext } from "@/contexts/loadcontext";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoad, setIsLoad] = useState(false);
  const handleRouterChangeStart = () => {
    setIsLoad(false);
  };
  const handleRouterChangeComplete = () => {
    setIsLoad(true);
  };
  useEffect(() => {
    setIsLoad(true);
    router.events.on("routeChangeStart", handleRouterChangeStart);
    router.events.on("routeChangeComplete", handleRouterChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouterChangeStart);
      router.events.off("routeChangeComplete", handleRouterChangeComplete);
    };
  }, []);
  return (
    <LoadContext.Provider value={isLoad}>
      <Component {...pageProps} />;
    </LoadContext.Provider>
  );
}
