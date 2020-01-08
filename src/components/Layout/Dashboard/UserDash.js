import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import UserContext from "../../../context/user/UserContext";

import styled from "styled-components";

const UDash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  #user-dash-display {
    display: flex;
    flex-direction: column;
    width: 475px;
    height: 600px;
    background-color: rgb(225, 225, 225);
    margin: 16px;
    padding: 8px;
    border-radius: 4px;

    #user-dash-details {
      height: 100%;

      h3 {
        color: green;
        font-size: 2em;
        font-weight: 600;
      }
    }

    #user-dash-settings {

      button {
        background-color: green;
        color: white;
        padding: 8px;
        border-radius: 4px;
      }
    }
  }
`;

export default function UserDash() {
  const Users = useContext(UserContext);

  const becomeFarmer = () => {
    Users.makeFarmer(Users.state.user.id)
  }

  return (
    <>
      {Users.state.user !== null || undefined ? (
        <UDash>
          <div id="user-dash-display">
            <div id="user-dash-details">
              <h3>{Users.state.user.firstName}</h3>
              {Users.state.user.rankrole}
            </div>
            <div id="user-dash-settings">
              {Users.state.user.rankrole !== "farmer" | "admin" ? <button onClick={() => becomeFarmer()}>Become Farmer</button> : null}
            </div>
          </div>
        </UDash>
      ) : (
        <div>
          Please log in
          <Redirect to="/" />
        </div>
      )}
    </>
  );
}
