import { LandingPage } from "./screens/landingPage.js";
import { ExplainPage } from "./screens/explainPage.js";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  console.log(page === 0);
  return (
    <React.Fragment>
      {page === 0 ? (
        <LandingPage setState={setPage} />
      ) : page === 1 ? (
        <ExplainPage setState={setPage} />
      ) : (
        console.log(page)
      )}
    </React.Fragment>
  );
}

export default App;
