import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

// import firebase from "../../../firebase/firebase";
// import "firebase/auth";

const Navbar = () => {
  const Nav = styled.nav`
    background-color: orange;
    height: 60px;
    width: "100%";
    margin: "0px";
  `;

  const LeftNav = styled.div`
    float: left;
    text-decoration: none;
    list-style: none;
  `;
  const RightNav = styled.div`
    float: right;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    background-color: green;
    padding: 20px;
    margin: 10px;
  `;

  return (
    <Nav>
      {/* Left Nav */}
      <LeftNav>
        <StyledLink to="/">Farm Fresh Produce</StyledLink>
      </LeftNav>
      {/* Right Nav */}
      <RightNav>
        <SignedInLinks />
        <SignedOutLinks />
      </RightNav>
    </Nav>
  );
};

export default Navbar;
