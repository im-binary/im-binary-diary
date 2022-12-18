import styled, { css } from "styled-components";

export default function Footer({ className }) {
  return (
    <Container className={className}>
      <Pongdang />
      <CC>All rights reserved.</CC>
    </Container>
  );
}

const Pongdang = () => (
  <Name css={css``}>
    <a href='https://github.com/pongdang' target='_blank' rel='noreferrer'>
      {"@pongdang."}
    </a>
  </Name>
);

const Name = styled.span`
  color: gray;
  margin-right: 4px;
`;

const CC = styled.span`
  color: ${({ theme }) => theme.color};
`;

const Container = styled.footer`
  padding: 19px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 1.4rem;
`;
