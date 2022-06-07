export default function CloudAnimation() {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/cloud.png' alt='cloud' />
      <style jsx>{`
        div {
          width: 100%;
          animation: flow 6s linear 0s infinite alternate;
        }

        img {
          width: 150px;
          margin-top: 0;
        }

        @keyframes flow {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(80%, 0);
          }
        }
      `}</style>
    </div>
  );
}
