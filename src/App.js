import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";
import UserState from "./context/user/UserState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserState>
          <FarmState>
            <Layout />
          </FarmState>
        </UserState>
      </BrowserRouter>
    </div>
  );
}

export default App;
