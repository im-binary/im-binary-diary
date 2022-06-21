import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GoBackButton from "../components/GoBackButton";
import { fetchDiaryDetail } from "../services/diary";

export default function DiaryDetail() {
  const router = useRouter();
  const [path, setPath] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (router.query.path == null) {
      return;
    }

    const path = router.query.path.join("/");
    setPath(path);
  }, [router.query]);

  useEffect(() => {
    if (path == null) {
      return;
    }

    (async () => {
      const { data } = await fetchDiaryDetail(path);
      setContent(data.content);
    })();
  }, [path]);

  return (
    <>
      <GoBackButton />
      <main className='diary-detail-container'>
        <h2>{path}</h2>
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
  );
}
