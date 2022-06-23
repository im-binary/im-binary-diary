import Router from "next/router";

export default function GoBackButton() {
  return (
    <button className='backspace-button' onClick={() => Router.back()}>
      뒤로가기
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          padding: 8px 14px;
          font-weight: bold;
          position: absolute;
          top: 10px;
          right: 12px;
          border-radius: 10px;
          transition: all 0.4s;
        }
        button:hover {
          transform: scale(1.04);
        }
      `}</style>
    </button>
  );
}
