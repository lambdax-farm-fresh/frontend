import React, { useEffect, useContext } from "react";

import firebase from "../../firebase/firebase";
import "firebase/auth";

import Navbar from "./Navbar/Navbar";

import { useSanity } from "../../hooks/api";
import UserContext from "../../context/user/UserContext";
import FarmList from "../Test/FarmList";

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
      <FarmList {...props} />
      {sanity}
    </>
  );
};

export default Layout;
