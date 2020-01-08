import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import userContext from "../../../context/user/UserContext";

import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px;
  background-color: green;
  color: white;

  a, button {
    font-size: 1em;
    margin: 0 4px;
    padding: 4px;
    border-radius: 2px;

    @media(max-width: 525px) {
      font-size: .82em;
    }
  }

  h1 {
    font-size: 1.8em;
    font-family: 'Roboto Condensed';

    @media(max-width: 525px) {
      font-size: 1.5em;
    }
    
    a {
      color: white;
      background: transparent;
    }
  }

  #right-nav {
    font-family: 'DM Sans';
  }
`

const Navbar = () => {
  const Users = useContext(userContext);


  return (
    <Nav>
      {/* Left Div */}
      <h1>
        <Link to="/">Farm Fresh Produce</Link>
      </h1>

      {/* Right Div */}
      <div id="right-nav">
        {Users.state.user !== null || undefined ? (
            <SignedInLinks />
          ) : 
           (
            <SignedOutLinks />
          )}
      </div>
    </Nav>
  );
};

export default Navbar;
