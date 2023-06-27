import "./page.css";

export function ExplainPage({ setState }) {
  console.log("explain");
  return (
    <div className="Container">
      <button className="bck-btn" onClick={() => setState(0)}>
        {`<`} Back
      </button>
      <div className="TitleCard">
        <h1 className="Title">Other page</h1>
      </div>
    </div>
  );
}
