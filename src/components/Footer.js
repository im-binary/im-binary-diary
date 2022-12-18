const Pongdang = () => (
  <span
    style={{
      color: "gray",
      marginRight: "4px",
    }}
  >
    <a href='https://github.com/pongdang' target='_blank' rel='noreferrer'>
      {"@pongdang."}
    </a>
  </span>
);

export default function Footer({ className }) {
  return (
    <footer
      className={className}
      style={{
        padding: "19px 0",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "1.4rem",
      }}
    >
      <Pongdang />
      <span className='footer-text'>All rights reserved.</span>
    </footer>
  );
}
