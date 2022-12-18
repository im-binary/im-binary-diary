import Head from "next/head";

export function PageHeadTitle({ children }) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}
