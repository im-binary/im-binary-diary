import Greeting from "./Greeting";
import Title from "./Title";

export default function Layout({ children }) {
  return (
    <section className='app-container'>
      <Title />
      <section className='contents-container'>
        <Greeting />
        <section>{children}</section>
      </section>
      <style jsx>{`
        .app-container {
          border: 3px solid pink;
          border-radius: 20px;
          height: 70vh;
          padding: 1rem;
          margin: 0 1rem;
        }
        .contents-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
      `}</style>
    </section>
  );
}
