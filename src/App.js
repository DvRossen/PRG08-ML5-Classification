import { LandingPage } from "./screens/landingPage";
import { ExplainPage } from "./screens/explainPage";
import { StartPage } from "./screens/startPage";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  console.log(page === 0);
  return page === 0 ? (
    <LandingPage setState={setPage} />
  ) : page === 1 ? (
    <StartPage setState={setPage} />
  ) : page === 2 ? (
    <ExplainPage setState={setPage} />
  ) : (
    <landingPage setPage={setPage} />
  );
}

export default App;
