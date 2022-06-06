export default function HelloDate() {
  const DateYear = new Date().getFullYear();
  return (
    <h2>
      {DateYear}
      <style jsx>{`
        h2 {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #f5f5f5;
          margin: 0;
          font-size: 80px;
        }
      `}</style>
    </h2>
  );
}
