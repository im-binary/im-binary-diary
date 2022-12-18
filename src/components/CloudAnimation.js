import styled, { css } from "styled-components";
import nextConfig from "next/config";

const { publicRuntimeConfig } = nextConfig();

const ASSET_PREFIX = publicRuntimeConfig.ASSET_PREFIX;

export default function CloudAnimation({ toggle, mode }) {
  const modeImageSrc = (mode) => {
    if (mode === "dark") {
      return `${ASSET_PREFIX}/moon.png`;
    } else if (mode === "light") {
      return `${ASSET_PREFIX}/sun.png`;
    }
  };

  return (
    <Container>
      <button onClick={toggle}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='mode-img' src={modeImageSrc(mode)} alt={mode} />
        <CloudImgContainer>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${ASSET_PREFIX}/cloud.png`} alt='cloud' />
        </CloudImgContainer>
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 135px;
  text-align: center;
  position: relative;
  margin-bottom: 30px;

  .mode-img {
    width: 100px;
    margin: 0 auto;
  }
`;

const CloudImgContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 62%;
  left: 50%;

  img {
    width: 200px;
    animation: flow 5s linear 0s infinite alternate;
  }

  @media (max-width: 422px) {
    img {
      width: 150px;
    }
  }
`;
