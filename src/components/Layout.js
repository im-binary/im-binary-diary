import { useTheme } from "../../context/themeProvider";
import CloudAnimation from "./CloudAnimation";
import Footer from "./Footer";
import Title from "./Title";

export default function Layout({ children }) {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <>
      <section className='app-container'>
        <Title />
        <CloudAnimation toggle={toggleTheme} mode={themeMode} />
        <section>{children}</section>
        <style jsx>{`
          .app-container {
            padding: 15px 10px 0;
          }

          .app-container section {
            height: calc(100vh - 305px);
            overflow: scroll;
            z-index: 999;
            position: relative;
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
