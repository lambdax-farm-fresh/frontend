import React, { useContext, useEffect, useState } from "react";
import FarmContext from "../../../context/farm/FarmContext";
import AddLocation from "../Dashboard/Farm/Locations/AddLocation";
import UserContext from "../../../context/user/UserContext";

export default function FarmPage(props) {
  const Farms = useContext(FarmContext);

  useEffect(() => {
    const {
      match: { params }
    } = props;

    Farms.getFarm(params.id);
  }, []);

  return (
    <div>
      {Farms.state.farm ? (
        <div>
          <h2>{Farms.state.farm.farmName}</h2>
        </div>
      ) : (
        <div> Farm Not Found </div>
      )}
    </div>
  );
}
