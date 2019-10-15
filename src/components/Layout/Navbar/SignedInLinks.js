import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/">Inventory</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
