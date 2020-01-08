import React, { useContext, useEffect, useState } from "react";
import FarmContext from "../../../../context/farm/FarmContext";
import UserContext from "../../../../context/user/UserContext";

import styled from "styled-components";
import AddFarm from "./AddFarm";

const OwnedFarms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100%;

  button {
    width: 100px;
    padding: 4px;
  }

  #btncust {
    border: 1px solid black;
    border-radius: 4px;
    margin: 4px;
  }

  #opened {
    display: relative;
  }

  #closed {
    display: none;
  }
`;

const SingleFarm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;

  h3 {
      display: flex;
      align-items: center;
      width: 225px;
      height: 55px;
      overflow: hidden;
  }

  #userFarmDetails {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 0 4px;
  }

  #exclaimWarning {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      padding: 4px;
      color: white;
      font-weight: bold;
      background-color: red;
      border-radius: 50%;
      height: 22px;
      width: 22px;
  }
`;

export default function FarmList() {
  const Farms = useContext(FarmContext);
  const Users = useContext(UserContext);

  const [addOpen, setAddOpen] = useState(false);

  // const pullFarms = () => {
  //     Farms.getOwnedFarms(Users.state.user.id)
  //     console.log("Farms Pulled. Make auto in future.")
  // }

  useEffect(() => {
    Farms.getOwnedFarms(Users.state.user.id);
  }, []);

  return (
    <OwnedFarms>
      {Farms.state.ownedFarms ? (
        <div>
          {Farms.state.ownedFarms.map(farm => {
            return (
              <SingleFarm>
                <h3 id="userFarmName">{farm.farmName}</h3>
                <div id="userFarmDetails">
                    <div id="userFarmLocations">
                        {farm.farmLocations.length > 0 ? <div></div> : <div id="exclaimWarning">!</div>}
                    </div>
                </div>
                <div>
                  <button id="btncust">Settings</button>
                </div>
              </SingleFarm>
            );
          })}
        </div>
      ) : (
        <div>No Owned Farms</div>
      )}
      <button id="btncust" onClick={() => setAddOpen(!addOpen)}>Add Farm</button>
      <div id={addOpen === true ? "opened" : "closed"}>
        <AddFarm id={"add"} />
      </div>
    </OwnedFarms>
  );
}
