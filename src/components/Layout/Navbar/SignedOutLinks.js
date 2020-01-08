import React from "react";
// import { NavLink } from "react-router-dom";

import GoogleSigninFunc from "../../../firebase/Google";

export default function SignedOutLinks() {
  return (
    <div>
        {/* <Li>
          <StyledNavLink to="/">
            Register
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/">
            Sign In
          </StyledNavLink>
        </Li> */}
          <GoogleSigninFunc />
    </div>
  )
}

