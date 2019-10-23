import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import GoogleSigninFunc from "../../../firebase/Google";

const SignedOutLinks = () => {
  const Ul = styled.ul`
    list-style-type: none;
    margin: 20px 0 0;
    padding: 0;
  `;

  const Li = styled.li`
    background-color: #ccc;
    padding: 10px;
    margin: 8px;
    border-radius: 4px;
    display: inline;
  `;

  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
  `;

  return (
    <div>
      <Ul>
        <Li>
          <StyledNavLink to="/">
            <span>Register</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/">
            <span>Sign In</span>
            <GoogleSigninFunc />
          </StyledNavLink>
        </Li>
      </Ul>
    </div>
  );
};

export default SignedOutLinks;
