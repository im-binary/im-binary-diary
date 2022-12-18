import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SquareButton from "../components/SquareButton";
import { fetchDiaryDetail } from "../services/diary";
import { PageHeadTitle } from "../components/PageHeadTitle";
import styled from "styled-components";

export default function DiaryDetail() {
  const router = useRouter();
  const [path, setPath] = useState(null);
  const [diaryDate, setDiaryDate] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.query.path == null) {
      return;
    }

    const path = router.query.path.join("/");
    setPath(path);
    const pathDate = router.query.path[1];
    setDiaryDate(pathDate);
  }, [router.query]);

  useEffect(() => {
    if (path == null) {
      return;
    }

    (async () => {
      setLoading(true);
      const { data } = await fetchDiaryDetail(path);
      setContent(data.content);
      setLoading(false);
    })();
  }, [path]);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <>
      <PageHeadTitle>Diary | {diaryDate}</PageHeadTitle>
      <SquareButton onClick={() => router.back()}>뒤로가기</SquareButton>
      <Container>
        <h2>{diaryDate}</h2>
        <p>{content}</p>
      </Container>
    </>
  );
}

const Container = styled.section`
  border-radius: 10px;
  white-space: pre-wrap;
  line-height: 1.6;
  padding: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.detailBgColor};

  h2 {
    font-size: 2rem;
    border-radius: 4px;
  }

  p {
    margin: 5px 0;
    font-size: 1.6rem;
    border-radius: 4px;
  }

  &.skeleton {
    h2,
    p {
      animation: skeleton-gradient 1.8s infinite ease-in-out;
      color: transparent;
    }
  }
`;

const Skeleton = () => {
  return (
    <Container className='skeleton'>
      <h2>로딩</h2>
      <p>로딩</p>
      <p>로딩</p>
      <p>로딩</p>
      <p>로딩</p>
      <p>로딩</p>
      <p>로딩</p>
      <p>로딩</p>
    </Container>
  );
};
