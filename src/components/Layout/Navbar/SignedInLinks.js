import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const SignedInLinks = () => {
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
          <StyledNavLink to="/">Locations</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/">Inventory</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/">Logout</StyledNavLink>
        </Li>
      </Ul>
    </div>
  );
};

export default SignedInLinks;
