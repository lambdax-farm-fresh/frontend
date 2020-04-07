import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import styled from "styled-components";
import { AuthContext } from "../../Auth";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px;
  background-color: green;
  color: white;

  a,
  button {
    font-size: 0.92em;
    margin: 0 4px;
    padding: 4px;
    border-radius: 2px;

    @media (max-width: 525px) {
      font-size: 0.82em;
    }
  }

  h1 {
    font-size: 2em;
    font-family: "Roboto Condensed", sans-serif;

    @media (max-width: 525px) {
      font-size: 1.5em;
    }

    a {
      color: white;
      background: transparent;
    }
  }
`;

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Nav>
      {/* Left Div */}
      <h1>
        <Link to="/">Farm Fresh Produce</Link>
      </h1>

      {/* Right Div */}
      <div id="right-nav">
        {currentUser !== null || undefined ? (
          <SignedInLinks />
        ) : (
          <SignedOutLinks />
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
