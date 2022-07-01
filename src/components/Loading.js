export default function Loading() {
  return (
    <main className='diary-detail-container'>
      <h2></h2>
      <p></p>
      <p></p>
      <p></p>
      <style jsx>{`
        @-webkit-keyframes myframe {
          0% {
            width: 20px;
          }

          100% {
            width: 100px;
          }
        }

        h2,
        p {
          animation: skeleton-gradient 1.8s infinite ease-in-out;
        }

        h2 {
          width: 100px;
          height: 24px;
          border-radius: 10px;
        }

        p {
          background-color: gray;
          width: 300px;
          height: 18px;
          margin: 0 0.5rem 0.5rem;
          border-radius: 10px;
        }

        main {
          border-radius: 10px;
          line-height: 1.6;
          padding: 2rem;
        }

        @keyframes skeleton-gradient {
          0% {
            background-color: rgba(165, 165, 165, 0.1);
          }

          50% {
            background-color: rgba(165, 165, 165, 0.3);
          }

          100% {
            background-color: rgba(165, 165, 165, 0.1);
          }
        }
      `}</style>
    </main>
  );
}
