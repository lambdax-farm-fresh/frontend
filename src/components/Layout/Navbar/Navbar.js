import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import userContext from "../../../context/user/UserContext";

// import firebase from "../../../firebase/firebase";
// import "firebase/auth";

const Navbar = () => {
  const Users = useContext(userContext);

  const Nav = styled.nav`
    background-color: rgba(232,232,232,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: "100%";
    margin: "0px";
  `;

  const LeftNav = styled.div`
    text-decoration: none;
    list-style: none;
  `;

  const RightNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2.2rem;
    padding: 10px;
    color: rgba(0,144,0,0.89);
    font-weight: bold;
  `;

  return (
    <Nav>
      {/* Left Nav */}
      <LeftNav>
        <StyledLink to="/">Farm Fresh Produce</StyledLink>
      </LeftNav>
      {/* Right Nav */}
      <RightNav>
        {Users.state.user !== null || undefined ? (
            <SignedInLinks />
          ) : 
           (
            <SignedOutLinks />
          )}
      </RightNav>
    </Nav>
  );
};

export default Navbar;
