import Router from "next/router";

export default function GoBackButton() {
  return (
    <button onClick={() => Router.back()}>
      뒤로가기
      <style jsx>{`
        button {
          position: absolute;
          top: 10px;
          right: 12px;
        }
      `}</style>
    </button>
  );
}
