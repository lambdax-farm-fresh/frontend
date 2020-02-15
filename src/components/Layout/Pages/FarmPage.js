import React, { useContext, useEffect } from "react";
import FarmContext from "../../../context/farm/FarmContext";

export default function FarmPage(props) {
  const Farms = useContext(FarmContext);

  const {
    match: { params }
  } = props;

  useEffect(() => {
    if (Farms.state.farm) {
      if (Farms.state.farm.id) {
        if (Farms.state.farm.id !== params.id) {
          Farms.getFarm(params.id);
        }
      }
    } else {
      Farms.getFarm(params.id);
    }
  }, [params.id]);

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
