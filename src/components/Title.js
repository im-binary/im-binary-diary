/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";
import HelloDate from "./HelloDate";

export default function Title() {
  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Jua:400' rel='stylesheet' />
      </Head>
      <header>
        <HelloDate />
        <h1>
          <Link href={`/diary`}>
            <a className='diary-home-btn'>DIARY</a>
          </Link>
        </h1>
        <style jsx>{`
          header {
            display: flex;
            height: 100px;
            justify-content: space-between;
            align-items: center;
            gap: 2px;
            margin: 0 1.3rem 1rem;
            font-family: "Jua", sans-serif;
          }
        `}</style>
      </header>
    </>
  );
}
