import React, { useContext, useState } from "react";
import styled from "styled-components";
import FarmContext from "../../../../../context/farm/FarmContext";
import LocationContext from "../../../../../context/location/LocationContext";
import UserContext from "../../../../../context/user/UserContext";

const AddLocationDiv = styled.div`
  #addLocationButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    #redx {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      padding: 8px;
      margin: 4px;
      height: 15px;
      width: 15px;
      color: white;
      border-radius: 50%;
    }
  }

  #open {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: -50;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;

    label {
      text-align: left;
      width: 100%;
      font-size: 0.9em;
    }

    input,
    button {
      padding: 4px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      margin: 4px 0px;
      border-radius: 4px;
    }

    button {
      background-color: green;
      color: white;
    }
  }

  #close {
    display: none;
  }
`;

export default function AddLocation(props) {
  const Farms = useContext(FarmContext);
  const Locations = useContext(LocationContext);
  const Users = useContext(UserContext);

  var [addLoca, setAddLoca] = useState(false);
  var [lat, setLat] = useState("");
  var [lon, setLon] = useState("");
  var [streetNumber, setStreetNumber] = useState("");
  var [streetName, setStreetName] = useState("");
  var [city, setCity] = useState("");
  var [state, setState] = useState("");
  var [countryCode, setCountryCode] = useState("");
  var [zip, setZip] = useState("");

  const addLocationToFarm = async e => {
    e.preventDefault();
    const locationObj = {
      id: props.farmId.toString() + "-" + props.locationNumber,
      farmId: props.farmId,
      lat: lat,
      lon: lon,
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      state: state,
      countryCode: countryCode,
      zip: zip
    };

    console.log(locationObj);
    Locations.addLocation(locationObj);
    Farms.getOwnedFarms(Users.state.user.id);
    setLat("");
    setLon("");
    setStreetNumber("");
    setStreetName("");
    setCity("");
    setState("");
    setCountryCode("");
    setZip("");
    setAddLoca(false);
  };

  return (
    <AddLocationDiv>
      <div id="addLocationButton">
        <button
          id={addLoca ? "redx" : "open"}
          onClick={() => setAddLoca(!addLoca)}
        >
          {addLoca ? "x" : "Add Location"}
        </button>
      </div>
      <form onSubmit={addLocationToFarm} id={addLoca ? "open" : "close"}>
        <label>Lat</label>
        <input type="text" value={lat} onChange={e => setLat(e.target.value)} />
        <label>Lon</label>
        <input type="text" value={lon} onChange={e => setLon(e.target.value)} />
        <label>Street Number</label>
        <input
          type="text"
          value={streetNumber}
          onChange={e => setStreetNumber(e.target.value)}
        />
        <label>Street Name</label>
        <input
          type="text"
          value={streetName}
          onChange={e => setStreetName(e.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <label>County Code</label>
        <input
          type="text"
          value={countryCode}
          onChange={e => setCountryCode(e.target.value)}
        />
        <label>Zip</label>
        <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
        <button>Add Location</button>
      </form>
    </AddLocationDiv>
  );
}
