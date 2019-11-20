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
        <Li>
          <GoogleSigninFunc />
        </Li>
      </Ul>
    </div>
  );
};

export default SignedOutLinks;
