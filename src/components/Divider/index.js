import './divider.scss';

export default function Divider({yellowWords,whiteWords,height}) {
  return (
    <section className="divider-section" style={{height:`${height}`}}>
      <h1 className="divider-tittle">
        <span className="yellow-title">{yellowWords}</span>{whiteWords}
      </h1>
    </section>
  );
}
