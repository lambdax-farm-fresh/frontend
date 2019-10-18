import React from "react";
import { BrowserRouter } from "react-router-dom";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/core";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <BrowserRouter>
        <FarmState>
          <Layout />
        </FarmState>
      </BrowserRouter>
    </div>
  );
}

export default App;
