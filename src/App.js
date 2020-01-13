import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

//Context State

import FarmState from "./context/farm/FarmState";
import UserState from "./context/user/UserState";
import LocationState from "./context/location/LocationState";
import Auth from "./components/Auth";

import "./assets/css/normalize.css";
import "./assets/css/global.css";
import "./assets/css/typo.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth>
          <UserState>
            <FarmState>
              <LocationState>
                <Layout />
              </LocationState>
            </FarmState>
          </UserState>
        </Auth>
      </BrowserRouter>
    </div>
  );
}

export default App;
