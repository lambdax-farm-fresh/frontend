import React, { useContext, useState } from "react";

import FarmContext from "../../../../context/farm/FarmContext";
import UserContext from "../../../../context/user/UserContext";

import styled from 'styled-components';

const AddFarmMain = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: rgba(0,0,0,.05);
  border: 1px solid rgba(0,0,0,.09);
  padding: 12px;
  margin: 4px;
  border-radius: 4px;
  max-width: 550px;
  min-width: 475px;

  label {
    padding: 10px 0px;
    font-size: 1em;
    color: green;
  }

  input, button {
    background-color: white;
    padding: 8px;
    margin: 4px 0px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,.9);
    color: rgba(0,0,0,.9);
  }
`;

export default function AddFarm(props) {
  const Farms = useContext(FarmContext);
  const Users = useContext(UserContext);

  const [farmName, setFarmName] = useState("");
  const [updfarmName, setupdFarmName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const farmObj = {
      userId: Users.state.user.id,
      farmName: farmName
    };

    try {
      Farms.addFarm(farmObj);
      Farms.getOwnedFarms(Users.state.user.id);
      setFarmName("");
      props.pullFarms();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitUpdate = e => {
    e.preventDefault();

    const farmObj = {
      id: props.id,
      userId: Users.state.user.id,
      farmName: updfarmName
    };

    try {
      Farms.updateFarm(farmObj);
      Farms.getFarms();
    } catch (err) {
      console.log(err);
    }
  };

  if (props.id !== "add") {
    return (
      <AddFarmMain onSubmit={handleSubmitUpdate}>
        <label>Updated Farm Name</label>
        <input
          type="text"
          value={updfarmName}
          name="farmName"
          onChange={e => setupdFarmName(e.target.value)}
        />
        <button id="addformbtn">Submit</button>
      </AddFarmMain>
    );
  } else {
    return (
      <AddFarmMain onSubmit={handleSubmit}>
        <label>Farm Name</label>
        <input
          type="text"
          value={farmName}
          name="farmName"
          onChange={e => setFarmName(e.target.value)}
        />
        <button>Submit</button>
      </AddFarmMain>
    );
  }
}
