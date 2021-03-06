import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FarmContext from "../../../../context/farm/FarmContext";
import UserContext from "../../../../context/user/UserContext";

import styled from "styled-components";
import AddFarm from "./AddFarm";
import AddLocation from "./Locations/AddLocation";

const FarmListDiv = styled.div`
  #btncust {
    border: 1px solid rgba(0, 99, 0, 0.4);
    border-radius: 4px;
    margin: 4px;
    font-size: 0.95em;
  }
  button {
    width: 125px;
    padding: 4px;
  }
  #opened {
    display: relative;
  }

  #closed {
    display: none;
  }
`;

const OwnedFarms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;

const SingleFarm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: 100%;

  #userFarmDetails {
    display: flex;
    align-items: center;
    padding: 4px;
    margin: 4px
    width: 100%;
    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0,0,0,.09);
    border-radius: 4px;
    padding: 16px;

    h3 {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      width: 255px;
      color: green;
    }

    #userFarmLocations {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;

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

  const pullFarms = async () => {
      await Farms.getOwnedFarms(Users.state.user.id);
      console.log(Farms.state.ownedFarms);
      console.log("HIT");
      setAddOpen(false);
  }

  useEffect(() => {
    Farms.getOwnedFarms(Users.state.user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FarmListDiv>
      <OwnedFarms>
        {Farms.state.ownedFarms ? (
          <div>
            {Farms.state.ownedFarms.map(farm => {
              return (
                <SingleFarm key={Date.now() + Math.random() * 367}>
                  <div id="userFarmDetails">
                    <h3 id="userFarmName">
                      <Link to={"/farm/" + farm.id}>{farm.farmName}</Link>
                    </h3>
                    <div id="userFarmLocations">
                      {farm.farmLocations.length > 0 ? (
                        <div>
                          {farm.farmLocations.map((location, index) => {
                            return (
                              <div
                                id="farmLocationDetails"
                                key={Date.now() + Math.random() * 368}
                              >
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
                    <div id="farmInteractButtons">
                      <AddLocation
                        farmId={farm.id}
                        locationNumber={farm.farmLocations.length + 1}
                      />
                    </div>
                  </div>
                </SingleFarm>
              );
            })}
          </div>
        ) : (
          <div>No Owned Farms</div>
        )}
      </OwnedFarms>
      <button id="btncust" onClick={() => setAddOpen(!addOpen)}>
        Add Farm
      </button>
      <div id={addOpen === true ? "opened" : "closed"}>
        <AddFarm id={"add"} pullFarms={pullFarms} />
      </div>
    </FarmListDiv>
  );
}
