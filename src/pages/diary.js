/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
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
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Jua:400&display=optional' rel='stylesheet' />
      </Head>
      <nav>
        <ul>
          {diaryList.map((diary) => (
            <li key={diary.path}>
              <Link href={`/diary/${diary.path}`}>
                <a>{diary.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          line-height: 1.9;
          font-family: "Jua", sans-serif;
        }
        ul {
          padding: 1rem 1.5rem;
          gap: 1.3rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        
        li {
          border-radius: 10px;
          transition: all 0.4s;
          box-shadow: -5px -5px 7px -1px #7f879047, 4px 4px 6px 1px rgb(0 0 0 / 20%);
        }

        li:hover {
          transform: scale(1.03);
        }

        li:active {
          transform: scale(0.98);
        }
        
        a {
          display: inline-block;
          text-align: center;
          width: 100%;
          padding: 1.8rem 1.5rem;
          font-size: 1.2rem;
        }

      

        @media (max-width: 800px) {
          ul {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 559px) {
          ul {
            grid-template-columns: 1fr;
          }
      `}</style>
    </>
  );
}
