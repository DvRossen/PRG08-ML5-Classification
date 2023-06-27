import "./page.css";

export function LandingPage({ setState }) {
  return (
    <div className="Container">
      <div className="Card TitleCard">
        <h1 className="Title">Fruit Recongizer</h1>
      </div>
      <button onClick={() => setState(1)}>Start</button>
      <button onClick={() => setState(2)}>How to</button>
    </div>
  );
}
