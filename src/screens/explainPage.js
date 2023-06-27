import "./page.css";

export function ExplainPage({ setState }) {
  return (
    <div className="Container">
      <div className="display-field">
        <button className="bck-btn" onClick={() => setState(0)}>
          Back
        </button>
        <div className="Card">
          <h1>Other page</h1>
        </div>
      </div>
    </div>
  );
}
