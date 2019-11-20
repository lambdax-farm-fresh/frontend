import React, { useEffect, useContext } from "react";
import { Switch, Route } from 'react-router-dom';

import firebase from "../../firebase/firebase";
import "firebase/auth";

import Navbar from "./Navbar/Navbar";
import Locations from "../Locations/Locations";

import { useSanity } from "../../hooks/api";
import UserContext from "../../context/user/UserContext";
import FarmList from "../Test/FarmList";
import UserDash from "../Dashboard/UserDash";

import styled from "@emotion/styled";
import FarmDash from "../Dashboard/FarmDash";

const LayoutContain = styled.div`
  font-family: Arial;

  .top-message {
    padding: 12px 16px;
    margin: 8px;
    background-color: rgba(0,0,0,0.03);
  }
`

const LoggedInMessage = styled.div`

`;

const LoggedOutMessage = styled.div`

`;

const Layout = props => {
  const [sanity] = useSanity("");

  const Users = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          if(Users.state.user === null) {
            Users.getUser(user.uid);
          }
      } else {
          console.log("No one is signed in")
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutContain>
      <Navbar />
      {Users.state.user !== null || undefined ? (
        <LoggedInMessage className="top-message">
        Currently signed in
        </LoggedInMessage>
      ) : (
        <LoggedOutMessage className="top-message">
        Please sign in above.
        </LoggedOutMessage>
      )}
      <Switch>
        <Route exact path="/farms" component={FarmList} />
        <Route exact path="/userdash" component={UserDash} />
        <Route exact path="/farmerdash" component={FarmDash} />
      </Switch>
      {sanity}
    </LayoutContain>
  );
};

export default Layout;
