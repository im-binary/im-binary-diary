import Title from "./Title";

export default function Layout({ children }) {
  return (
    <section className='app-container'>
      <Title />
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/cloud.png' alt='cloud' />
      </div>

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

        img {
          width: 100px;
          animation: motion 0.6s linear 0s infinite alternate;
          margin-top: 0;
        }

        @keyframes motion {
          0% {
            margin-top: 0px;
          }
          100% {
            margin-top: 10px;
          }
        }
      `}</style>
    </section>
  );
}
