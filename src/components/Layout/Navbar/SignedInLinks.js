import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import firebase from "../../../firebase/firebase";
import "firebase/auth";
import userContext from "../../../context/user/UserContext";

const SignedInLinks = () => {
  const Users = useContext(userContext);

  const SignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Signed Out")
    }).catch(function(error) {
      console.log("Sign Out Error", error)
    });
    
    Users.clearUser();
  }

  return (
    <div>
      <ul>
        {Users.state.user.rankrole === "farmer" || "admin" ? (
          <li>
            <NavLink to="/farmerdash">Farmer Dashboard</NavLink>
          </li>
        ) : null}
        <li>
          <NavLink to="/">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/userdash">{Users.state.user.firstName}</NavLink>
        </li>
        <li>
          <NavLink onClick={() => SignOut()} to="/">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
