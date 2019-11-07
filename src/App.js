import React from "react";
import { BrowserRouter } from "react-router-dom";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/core";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";
import UserState from "./context/user/UserState";
import LocationState from "./context/location/LocationState";

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <BrowserRouter>
        <UserState>
          <FarmState>
            <LocationState>
              <Layout />
            </LocationState>
          </FarmState>
        </UserState>
      </BrowserRouter>
    </div>
  );
}

export default App;
