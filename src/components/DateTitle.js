import styled from "styled-components";

export default function DateTitle() {
  const currentYear = new Date().getFullYear();

  return <Title>{currentYear}</Title>;
}

const Title = styled.h2`
  margin: 0;
  font-size: 8rem;

  @media (max-width: 422px) {
    font-size: 5rem;
  }

  @media (max-width: 338px) {
    font-size: 3rem;
  }
`;
