import "@tabler/core/dist/css/tabler.min.css";

import "../sass/app.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("@tabler/core/dist/js/tabler.min.js");
  }, []);
  return <Component {...pageProps} />;
}
