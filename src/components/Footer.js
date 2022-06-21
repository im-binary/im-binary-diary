const Pongdang = () => (
  <span
    style={{
      color: "gray",
      height: "1em",
      marginLeft: "0.5rem",
      outline: "none",
    }}
  >
    <a href='https://github.com/pongdang' target='_blank' rel='noreferrer'>
      {"@pongdang. "}
    </a>
  </span>
);

export default function Footer({ className }) {
  return (
    <footer
      className={className}
      style={{
        padding: "1.9rem 0",
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      <Pongdang />
      <span className='footer-text'>All rights reserved.</span>
    </footer>
  );
}
