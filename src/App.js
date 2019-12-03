import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";
import UserState from "./context/user/UserState";
import LocationState from "./context/location/LocationState";

import "./assets/css/normalize.css";
import "./assets/css/global.css";
import "./assets/css/typo.css";

function App() {
  return (
    <div className="App">
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
