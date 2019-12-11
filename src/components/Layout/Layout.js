import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import firebase from "../../firebase/firebase";
import "firebase/auth";

import Navbar from "./Navbar/Navbar";
import Locations from "./Dashboard/Locations/Locations";

import UserContext from "../../context/user/UserContext";
import UserDash from "./Dashboard/UserDash";

import FarmList from "../Test/FarmList";
import FarmDash from "./Dashboard/FarmDash";
import HomeDash from "./Dashboard/HomeDash";

import styled from "styled-components";

const LayoutHold = styled.div`
`;

const Layout = props => {
  const Users = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (Users.state.user === null) {
          Users.getUser(user.uid);
        }
      } else {
        console.log("No one is signed in");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="layout-div">
      <Navbar />
      <LayoutHold>
        <Switch>
          <Route exact path="/" component={HomeDash} />
          <Route exact path="/farms" component={FarmList} />
          <Route exact path="/userdash" component={UserDash} />
          <Route exact path="/farmerdash" component={FarmDash} />
        </Switch>
        {Users.state.user !== null || undefined ? (
          <div className="top-message">Currently signed in</div>
        ) : (
          <div className="top-message">Please sign in above.</div>
        )}
      </LayoutHold>
    </div>
  );
};

export default Layout;
