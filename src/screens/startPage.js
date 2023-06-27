import "./page.css";

import * as ml5 from "ml5";
import Sketch from "p5-react";
import { useEffect, useRef, useState } from "react";

export function StartPage({ setState }) {
  const classifier = useRef(null);
  const capture = useRef(null);
  const sketchRef = useRef(null);
  const similarFramesRef = useRef({ label: null, frames: 0 });

  const [results, setResults] = useState([]);
  const [likelyResult, setLikelyResult] = useState(null);

  useEffect(() => {
    const loadClassifier = async () => {
      const _classifier = await ml5.imageClassifier(
        "fruit-classifier/model.json"
      );
      classifier.current = _classifier;
    };
    loadClassifier();
  }, []);

  const gotResults = (error, results) => {
    if (error) {
      console.error(error);
      return;
    }

    setResults(results);

    const newLikelyResult = results.find((result) => result.confidence > 0.85);
    if (newLikelyResult) {
      if (newLikelyResult.label === similarFramesRef.current.label) {
        similarFramesRef.current.frames++;
        if (similarFramesRef.current.frames === 25) {
          setLikelyResult(newLikelyResult);
          console.log(`Waarschijnlijk een ${newLikelyResult.label}`);
        }
      } else {
        similarFramesRef.current.frames = 0;
        similarFramesRef.current.label = newLikelyResult.label;
      }
    } else {
      setLikelyResult(null);
      similarFramesRef.current.label = null;
      similarFramesRef.current.frames = 0;
    }

    classifier.current.classify(capture.current, gotResults);
  };

  const setup = (p5, canvasParentRef) => {
    capture.current = p5.createCapture(p5.VIDEO).parent(canvasParentRef);

    const loadClassifier = async () => {
      const _classifier = await ml5.imageClassifier(
        "fruit-classifier/model.json"
      );
      classifier.current = _classifier;

      _classifier.classify(capture.current, gotResults);
    };

    loadClassifier();
  };

  const sketch = (p5) => {};

  return (
    <div className="Container">
      <div className="display-field">
        <div className="Card">
          <button className="bck-btn" onClick={() => setState(0)}>
            Back
          </button>

          <h1>Classify fruit</h1>

          <div ref={sketchRef}>
            <Sketch setup={setup} sketch={sketch} />
          </div>

          {likelyResult ? (
            <h1>Waarschijnlijk een {likelyResult.label}</h1>
          ) : (
            <h1>Geen fruit in de buurt</h1>
          )}
        </div>
        <div ref={sketchRef}>
          <table style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th>Label</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.label}>
                  <td style={{ textAlign: "left", width: "200px" }}>
                    {result.label}
                  </td>
                  <td style={{ width: "300px" }}>
                    <div
                      style={{
                        width: `${300 * result.confidence}px`,
                        height: "20px",
                        background: "red",
                      }}
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
