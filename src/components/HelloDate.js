export default function HelloDate() {
  const DateYear = new Date().getFullYear();
  return (
    <h2>
      {DateYear}
      <style jsx>{`
        h2 {
          margin: 0;
          font-size: 80px;
        }

        @media (max-width: 422px) {
          h2 {
            font-size: 50px;
          }
        }

        @media (max-width: 338px) {
          h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </h2>
  );
}
