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
    font-size: .95em;
    font-weight: 600;
    margin: 0 4px;
    padding: 4px;
    border-radius: 2px;
  }

  h1 {
    font-family: Georgia;
    font-size: 1.6em;
    font-weight: 300;
    
    a {
      color: white;
      background: transparent;
    }
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
