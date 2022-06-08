export default function CloudAnimation() {
  return (
    <div className='container'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className='img-moon' src='/moon.png' alt='moon' />
      <div className='cloud-container'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='img-cloud' src='/cloud.png' alt='cloud' />
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          text-align: center;
          position: relative;
        }

        .img-moon {
          width: 100px;
          margin: 0 auto;
        }

        .cloud-container {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 77%;
          left: 50%;
        }

        .img-cloud {
          width: 200px;
          animation: flow 5s linear 0s infinite alternate;
        }

        @keyframes flow {
          from {
            transform: translate(-40%, 0);
          }
          to {
            transform: translate(40%, 0);
          }

          0% {
            opacity: 0.6;
          }
          25% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.6;
          }
        }

        @media all and (orientation: landscape) {
          .container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
