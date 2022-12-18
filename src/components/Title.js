import Link from "next/link";
import HelloDate from "./HelloDate";
import styled from "styled-components";

export default function Title() {
  return (
    <Header>
      <MainTitle>
        <Link href={`/`}>
          <a className='diary-home-btn'>DIARY</a>
        </Link>
      </MainTitle>
      <HelloDate />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  margin: 0 13px 10px;
  font-family: "Jua", sans-serif;
`;

const MainTitle = styled.h1`
  font-size: 3rem;

  a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
