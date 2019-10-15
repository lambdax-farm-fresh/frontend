import React from "react";
import { NavLink } from "react-router-dom";

import GoogleSigninFunc from "../../../firebase/Google";

const SignedOutLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">
            <span>Register</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span>Sign In</span>
            <button onClick={GoogleSigninFunc}>Google</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
