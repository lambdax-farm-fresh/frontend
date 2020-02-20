import React, { useContext, useState, useEffect} from "react";
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
    width: 440px;
    background-color: rgb(225, 225, 225);
    margin: 16px;
    padding: 8px;
    border-radius: 4px;

    #user-dash-details {
      height: 100%;

      #nameAndPic {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          height: 125px;
          border-radius: 4px;
        }

        h3 {
          color: green;
          font-size: 2em;
          font-weight: 600;
        }
      }
    }

      button {
        background-color: green;
        color: white;
        padding: 8px;
        border-radius: 4px;
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
    Users.makeFarmer(Users.state.user.id);
  };


  //sets up useState hook to store location
  const [loc, setLoc] = useState({});
  const getLocation = () => { //uses a callback to get the location from the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationCallback);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  const locationCallback = (location) => { //sets the state based on the browser location
    setLoc(location.coords); 
  }



  return (
    <>
      {Users.state.user !== null || undefined ? (
        <UDash>
          <div id="user-dash-display">
            <div id="user-dash-details">
              <div id="nameAndPic">
                <h3>{Users.state.user.firstName}</h3>
                <img src={Users.state.user.picture} alt="User" />
              </div>
              <div id="lowerDetails">
                <p>Email: {Users.state.user.email}</p>
                <button onClick={() => getLocation()}>get my location</button>
                <p>lat: {loc ? loc.latitude: "location not available"}</p>
                <p>lon: {loc ? loc.longitude: "location not available"}</p>
                <p>rankrole: {Users.state.user.rankrole}</p>
              </div>
            </div>
            <div id="user-dash-settings">
              {(Users.state.user.rankrole !== "farmer") | "admin" ? (
                <button onClick={() => becomeFarmer()}>Become Farmer</button>
              ) : null}
            </div>
          </div>
        </UDash>
      ) : (
        <div>Please log in</div>
      )}
    </>
  );


}
