import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Register</NavLink>
        </li>
        <li>
          <NavLink to="/">Sign In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
