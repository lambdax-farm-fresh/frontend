import React from "react";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from './context/farm/FarmState';

function App() {
  return (
    <div className="App">
      <FarmState>
        <Layout />
      </FarmState>
    </div>
  );
}

export default App;
