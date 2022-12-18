import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { fetchDiaryList } from "../services/diary";
import styled from "styled-components";

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await fetchDiaryList();
      setDiaryList(data.list);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Nav>
      {Object.keys(diaryList)
        .sort((a, b) => b - a)
        .map((year, index) => (
          <Container key={`${year}-${index}`}>
            <DiaryYear>{year}</DiaryYear>
            <Ul>
              {diaryList[year].length === 0 ? (
                <li>없습니당</li>
              ) : (
                diaryList[year].map((diary) => (
                  <li className='diary-box' key={diary.path}>
                    <Link href={`/${diary.path}`}>
                      <a>{diary.name}</a>
                    </Link>
                  </li>
                ))
              )}
            </Ul>
          </Container>
        ))}
    </Nav>
  );
}

const Skeleton = () => {
  return (
    <Nav>
      <DiaryYear className='skeleton'>2022</DiaryYear>
      <Ul className='skeleton'>
        <li>
          <a>로딩</a>
        </li>
        <li>
          <a>로딩</a>
        </li>
        <li>
          <a>로딩</a>
        </li>
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  line-height: 1.9;
`;

const Container = styled.div`
  position: relative;
`;

const DiaryYear = styled.h1`
  font-size: 2.2rem;
  margin: 0 13px 10px;
  position: sticky;
  top: 0;

  &.skeleton {
    transition: all 0.4s;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    color: transparent;
    font-size: 2rem;
    display: inline-block;
    border-radius: 10px;
  }
`;

const Ul = styled.ul`
  padding: 16px 24px;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  li {
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  li:not(&.skeleton li):active {
    box-shadow: ${({ theme }) => theme.insetBoxShadow};
  }

  li:hover {
    color: #4747ff;
  }

  a {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 29px 24px;
    font-size: 1.8rem;
  }

  &.skeleton li {
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  &.skeleton li a {
    opacity: 0;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 559px) {
    grid-template-columns: 1fr;
  }
`;
