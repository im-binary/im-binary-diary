import Link from "next/link";
import DateTitle from "./DateTitle";
import styled from "styled-components";

export default function Title() {
  return (
    <Header>
      <MainTitle>
        <Link href={`/`}>
          <a>DIARY</a>
        </Link>
      </MainTitle>
      <DateTitle />
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
`;

const MainTitle = styled.h1`
  font-size: 3rem;

  a:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
