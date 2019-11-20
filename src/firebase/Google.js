import React, { useContext } from "react";
import firebase from "./firebase.js";
import "firebase/auth";

import UserContext from "../context/user/UserContext";

const address =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8181"
    : "https://farm-fresh-produce.herokuapp.com";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export default function GoogleLoginFunc() {
  const Users = useContext(UserContext);

  const GoogleLoginFunc = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async result => {
        var user = result.user;

        var userObj = {
          firstName: user.displayName,
          lastName: "",
          email: user.email,
          firebaseId: user.uid,
          picture: user.photoURL
        };

        var usercheck = await fetch(`${address}/graphQl`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `query ($firebaseId: String!) 
                        { user(firebaseId: $firebaseId) 
                            { 
                                id 
                            } }`,
            variables: {
                firebaseId: userObj.firebaseId
            }
          })
        })
          .then(res => res.json())
          .catch(err => console.log(err));


        if(usercheck.data.user === null || undefined) {
            console.log("adding user")
            Users.addUser(userObj)
        } else {
            Users.loadUser(userObj)
            console.log('Logged In')
        }
      })
      .catch(err => {
        var code = err.code;
        var message = err.message;
        var email = err.email;
        console.log(code, message, email);
      });
  };

  return <button onClick={GoogleLoginFunc}>Google Sign In</button>;
}
