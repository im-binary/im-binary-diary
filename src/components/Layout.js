import CloudAnimation from "./CloudAnimation";
import Title from "./Title";

export default function Layout({ children }) {
  return (
    <section className='app-container'>
      <Title />
      <CloudAnimation />
      <section>{children}</section>
      <style jsx>{`
        .app-container {
          border-radius: 20px;
          height: 90vh;
          padding: 1rem 1.5rem;
          margin: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #2b2b2b;
        }
        .app-container section {
          overflow: scroll;
          height: 500px;
          color: #f5f5f5;
        }
      `}</style>
    </section>
  );
}
