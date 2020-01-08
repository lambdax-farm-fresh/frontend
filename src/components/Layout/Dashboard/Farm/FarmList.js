import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FarmContext from "../../../../context/farm/FarmContext";
import UserContext from "../../../../context/user/UserContext";

import styled from "styled-components";
import AddFarm from "./AddFarm";
import AddLocation from "./Locations/AddLocation";

const OwnedFarms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100%;

  button {
    width: 125px;
    padding: 4px;
  }

  #btncust {
    border: 1px solid rgba(0,99,0,.4);
    border-radius: 4px;
    margin: 4px;
    font-size: .95em;
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
  min-height: 56px;
  height: 100%;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    overflow: hidden;
    font-size: 1.4em;
    font-weight: bold;
    color: green;
  }

  #userFarmDetails {
    display: flex;
    align-items: center;
    padding: 0 4px;

    #userFarmLocations {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      background-color: rgba(0, 159, 0, 0.2);
      border-radius: 4px;
      padding: 16px;

      #farmLocationDetails {
        display: flex;
        flex-direction: column;
        padding: 4px 0px;
        height: 100%;
      }
    }
  }

  #farmInteractButtons {
    display: flex;
  }

  #noLocations {
    display: flex;
    align-items: center;
  }

  #exclaimWarning {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    padding: 4px;
    margin: 0 4px;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OwnedFarms>
      {Farms.state.ownedFarms ? (
        <div>
          {Farms.state.ownedFarms.map(farm => {
            return (
              <SingleFarm>
                <h3 id="userFarmName"><Link to={"/farm/" + farm.id} >{farm.farmName}</Link></h3>
                <div id="userFarmDetails">
                  <div id="userFarmLocations">
                    {farm.farmLocations.length > 0 ? (
                      <div>
                        {farm.farmLocations.map((location, index) => {
                          return (
                            <div id="farmLocationDetails">
                              <strong>Location {index + 1}</strong>
                              {location.streetNumber} {location.streetName}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div id="noLocations">
                        <div id="exclaimWarning">!</div> No Locations Found
                      </div>
                    )}
                  </div>
                </div>
                <div id="farmInteractButtons">
                  <button id="btncust">Add Location</button>
                </div>
              </SingleFarm>
            );
          })}
        </div>
      ) : (
        <div>No Owned Farms</div>
      )}
      <button id="btncust" onClick={() => setAddOpen(!addOpen)}>
        Add Farm
      </button>
      <div id={addOpen === true ? "opened" : "closed"}>
        <AddFarm id={"add"} />
      </div>
      <AddLocation />
    </OwnedFarms>
  );
}
