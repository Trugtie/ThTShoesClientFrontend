import "./divider.scss";

export default function Divider({ yellowWords, whiteWords, height }) {
  return (
    <section className="divider-section" style={{ height: `${height}` }}>
      <h1
        className="divider-tittle"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <span className="yellow-title">{yellowWords}</span>
        {whiteWords}
      </h1>
    </section>
  );
}
