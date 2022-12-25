import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import sectionContext from "../contexts/sectionContext";

import { Section } from "../utils/schema";

function MyApp({ Component, pageProps }: AppProps) {
  const [section, setSection] = useState<Section>("about");

  return (
    <sectionContext.Provider value={{ section, setSection }}>
      <Component {...pageProps} />
    </sectionContext.Provider>
  );
}

export default MyApp;
