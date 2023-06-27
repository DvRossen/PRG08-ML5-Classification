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
          <p>
            Welkom bij Fruit Recongizer. Dit is een tool die je helpt fruit te
            herkennen! Momenteel helpt het alleen met het herkennen van veel
            voorkomend fruit maar later helpt het met exotisch fruit!
          </p>
          <p>
            Om fruit te herkennen start simpelweg de app en hou je fruit voor je
            camera! De Ai laat dan zien welk fruit hij denkt dat het is, het
            fruit waarvan hij de meeste "confidence" is waarschijnlijk het fruit
            dat je voor de webcam houdt!
          </p>
        </div>
      </div>
    </div>
  );
}
