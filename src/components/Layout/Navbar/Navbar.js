import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import userContext from "../../../context/user/UserContext";

// import firebase from "../../../firebase/firebase";
// import "firebase/auth";

const Navbar = () => {
  const Users = useContext(userContext);


  return (
    <div>
      {/* Left Div */}
      <div id="left-nav">
        <Link to="/">Farm Fresh Produce</Link>
      </div>
      {/* Right Div */}
      <div id="right-nav">
        {Users.state.user !== null || undefined ? (
            <SignedInLinks />
          ) : 
           (
            <SignedOutLinks />
          )}
      </div>
    </div>
  );
};

export default Navbar;
