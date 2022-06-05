export default function Greeting() {
  return (
    <section className='container'>
      <h2>안녕하세요</h2>
      <p></p>
      <style jsx>{`
        .container {
          border: 1px solid;
          height: calc(60vh - 30%);
          line-height: 1.9;
          overflow: scroll;
          padding: 1rem 0 1rem 3rem;
        }
      `}</style>
    </section>
  );
}
