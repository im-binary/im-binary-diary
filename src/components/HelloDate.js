export default function HelloDate() {
  const currentYear = new Date().getFullYear();
  return (
    <h2>
      {currentYear}
      <style jsx>{`
        h2 {
          margin: 0;
          font-size: 8rem;
        }

        @media (max-width: 422px) {
          h2 {
            font-size: 5rem;
          }
        }

        @media (max-width: 338px) {
          h2 {
            font-size: 3rem;
          }
        }
      `}</style>
    </h2>
  );
}
