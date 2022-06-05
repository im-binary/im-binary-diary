import Router from "next/router";

export default function GoBackButton() {
  return <button onClick={() => Router.back()}>뒤로가기</button>;
}
