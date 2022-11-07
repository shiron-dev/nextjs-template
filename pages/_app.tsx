import type { AppProps } from "next/app";
import React from "react";
import { GlobalStyles } from "./styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
