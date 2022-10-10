import { css } from "styled-components";
import nextConfig from "next/config";

const { publicRuntimeConfig } = nextConfig();

const ASSET_PREFIX = publicRuntimeConfig.ASSET_PREFIX;

export default function CloudAnimation({ toggle, mode }) {
  return (
    <div className='container' css={container}>
      {mode === "dark" ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='img-moon' src={`${ASSET_PREFIX}/moon.png`} alt='moon' />
          <div className='cloud-container' onClick={toggle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='img-cloud' src={`${ASSET_PREFIX}/cloud.png`} alt='cloud' />
          </div>
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className='img-sun' src={`${ASSET_PREFIX}/sun.png`} alt='sun' />
          <div className='cloud-container' onClick={toggle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='img-cloud' src={`${ASSET_PREFIX}/cloud.png`} alt='cloud' />
          </div>
        </>
      )}
      <style jsx>{`
        .container {
          width: 100%;
          height: 135px;
          text-align: center;
          position: relative;
          margin-bottom: 30px;
        }

        .img-moon,
        .img-sun {
          width: 100px;
          margin: 0 auto;
        }

        .cloud-container {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 62%;
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

        @media (max-width: 422px) {
          .img-cloud {
            width: 150px;
          }
        }
      `}</style>
    </div>
  );
}

const container = css``;
