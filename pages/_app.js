import "../styles/globals.css";
import Layout from "../src/components/Layout";
import { ThemeProvider } from "../context/themeProvider";
import { GlobalStyle } from "../src/Theme/GlobalStyle";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Head>
        <title>Diary | All</title>
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
