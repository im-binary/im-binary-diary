import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GoBackButton from "../components/GoBackButton";
import { fetchDiaryDetail } from "../services/diary";
import Loading from "../components/Loading";
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
        <Loading />
      ) : (
        <>
          <GoBackButton />
          <main className='diary-detail-container'>
            <h2>{diaryDate}</h2>
            <p>{content}</p>
          </main>
          <style jsx>{`
            main {
              border-radius: 10px;
              white-space: pre-wrap;
              line-height: 1.6;
              padding: 2rem;
            }
            p {
              margin: 0 0.5rem;
            }
          `}</style>
        </>
      )}
    </>
  );
}
