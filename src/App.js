import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FarmState>
          <Layout />
        </FarmState>
      </BrowserRouter>
    </div>
  );
}

export default App;
