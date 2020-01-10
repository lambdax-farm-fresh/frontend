import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import FarmContext from "../../../../../context/farm/FarmContext";
import axios from 'axios';

export default function AddLocation(props) {
  const Farms = useContext(FarmContext);

  var [searchAdd, setSearchAdd] = useState("")

  const addLocationToFarm = async () => {

  };

  return (
    <div>
      <input type="text" value={searchAdd} onChange={e => setSearchAdd(e.target.value)} />
      <button onClick={() => addLocationToFarm()}>CLICK</button>
    </div>
  );
}
