import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchDiaryList } from "../services/diary";

export default function DiaryList() {
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchDiaryList();
      setDiaryList(data.list);
    })();
  }, []);
  return (
    <nav>
      <ul>
        {diaryList.map((diary) => (
          <>
            <li key={diary.path}>
              <Link href={`/diary/${diary.path}`}>
                <a>{diary.name}</a>
              </Link>
            </li>
            <li key={diary.path}>
              <Link href={`/diary/${diary.path}`}>
                <a>{diary.name}</a>
              </Link>
            </li>
            <li key={diary.path}>
              <Link href={`/diary/${diary.path}`}>
                <a>{diary.name}</a>
              </Link>
            </li>
          </>
        ))}
      </ul>
      <style jsx>{`
        nav {
          border: 1px solid;
          height: calc(60vh - 30%);
          line-height: 1.9;
          overflow: scroll;
        }
        ul {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 1rem;
        }
        li {
          border: 1px solid;
        }
        a {
          display: inline-block;
          text-align: center;
          width: 100%;
          padding: 1.5rem;
        }
      `}</style>
    </nav>
  );
}
