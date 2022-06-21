import "../styles/globals.css";
import Layout from "../src/components/Layout";
import { ThemeProvider } from "../context/themeProvider";
import { GlobalStyle } from "../src/Theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
