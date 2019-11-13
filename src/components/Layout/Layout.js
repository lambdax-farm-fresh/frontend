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
    <>
      <Navbar />
      <Switch>
        <Route exact path="/farms" component={FarmList} />
        <Route exact path="/userdash" component={UserDash} />
      </Switch>
      {sanity}
    </>
  );
};

export default Layout;
