import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SquareButton from "../components/SquareButton";
import { fetchDiaryDetail } from "../services/diary";
import Head from "next/head";

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

  return (
    <>
      <Head>
        <title>Diary | {diaryDate}</title>
      </Head>
      {loading ? (
        <main className='diary-detail-container'>
          <h2>로딩</h2>
          <p>로딩</p>
          <p>로딩</p>
          <p>로딩</p>
          <style jsx>{`
            main {
              border-radius: 10px;
              white-space: pre-wrap;
              line-height: 1.6;
              padding: 20px;
            }

            h2,
            p {
              animation: skeleton-gradient 1.8s infinite ease-in-out;
              color: transparent;
            }

            p {
              margin: 0 5px;
            }

            @keyframes skeleton-gradient {
              0% {
                background-color: rgba(165, 165, 165, 0.1);
              }

              50% {
                background-color: rgba(165, 165, 165, 0.3);
              }

              100% {
                background-color: rgba(165, 165, 165, 0.1);
              }
            }
          `}</style>
        </main>
      ) : (
        <>
          <SquareButton onClick={() => router.back()}>뒤로가기</SquareButton>
          <main className='diary-detail-container'>
            <h2>{diaryDate}</h2>
            <p>{content}</p>
          </main>
          <style jsx>{`
            main {
              border-radius: 10px;
              white-space: pre-wrap;
              line-height: 1.6;
              padding: 20px;
            }

            h2 {
              font-size: 2rem;
            }

            p {
              margin: 0 5px;
              font-size: 1.6rem;
            }
          `}</style>
        </>
      )}
    </>
  );
}
