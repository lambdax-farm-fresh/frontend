import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import firebase from "../../../firebase/firebase";
import "firebase/auth";
import userContext from "../../../context/user/UserContext";

const SignedInLinks = () => {
  const Users = useContext(userContext);

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

  const SignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Signed Out")
    }).catch(function(error) {
      console.log("Sign Out Error", error)
    });
    
    Users.clearUser();
  }

  return (
    <div>
      <Ul>
        {Users.state.user.rankrole === "farmer" || "admin" ? (
          <Li>
            <StyledNavLink to="/farmerdash">Farmer Dashboard</StyledNavLink>
          </Li>
        ) : null}
        <Li>
          <StyledNavLink to="/">Locations</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/">Inventory</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/userdash">{Users.state.user.firstName}</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink onClick={() => SignOut()} to="/">Logout</StyledNavLink>
        </Li>
      </Ul>
    </div>
  );
};

export default SignedInLinks;
