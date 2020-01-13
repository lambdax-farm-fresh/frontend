import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import firebase from "../../../firebase/firebase";
import "firebase/auth";
import userContext from "../../../context/user/UserContext";
import { AuthContext } from "../../Auth";

const SignedInLinks = () => {
  const Users = useContext(userContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if(!Users.state.user) {
      Users.getUser(currentUser.uid 
        );
    }
  })

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("Signed Out");
      })
      .catch(function(error) {
        console.log("Sign Out Error", error);
      });

    Users.clearUser();
  };

  return (
    <div>
      {Users.state.user ? (
                <>
                  {Users.state.user.rankrole === "farmer" ||
                  Users.state.user.rankrole === "admin" ? (
                    <NavLink to="/farmerdash">Your Farms</NavLink>
                  ) : null}
                  <NavLink to="/userdash">Profile</NavLink>
                  <NavLink id="logoutButton" onClick={() => SignOut()} to="/">
                    Logout
                  </NavLink>
                </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SignedInLinks;
