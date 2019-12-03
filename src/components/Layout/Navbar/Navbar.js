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
  background-color: rgba(0,0,0,0.04);
  padding: 16px 4px;

  a, button {
    color: white;
    background-color: green;
    padding: 4px;
    border-radius: 4px;
  }

  h1 {
    font-size: 1.6em;
    font-weight: 300;
    
    a {
      color: black;
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
