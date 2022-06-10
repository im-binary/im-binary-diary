import CloudAnimation from "./CloudAnimation";
import Footer from "./Footer";
import Title from "./Title";

export default function Layout({ children }) {
  return (
    <>
      <section className='app-container'>
        <Title />
        <CloudAnimation />
        <section>{children}</section>
        <style jsx>{`
          .app-container {
            padding: 1.5rem 1rem 0;
          }

          .app-container section {
            /* height: calc(100vh - 385px); */
            height: calc(100vh - 305px);
            overflow: scroll;
            color: #f5f5f5;
            z-index: 999;
            position: relative;
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
