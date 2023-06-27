import "./page.css";

export function LandingPage({ setState }) {
  return (
    <div className="Container">
      <div className="Card TitleCard">
        <h1 className="Title">Fruit Recongizer</h1>
      </div>
      <button className="front-page-button" onClick={() => setState(1)}>
        Start
      </button>
      <button className="front-page-button" onClick={() => setState(2)}>
        How to
      </button>
    </div>
  );
}
