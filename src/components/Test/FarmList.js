import React, { useContext, useEffect } from "react";

import FarmContext from "../../context/farm/FarmContext";

export default function FarmList(props) {
  const farmContext = useContext(FarmContext);

  useEffect(() => {
    console.log("attempting to pull farms");
    farmContext.getFarms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {farmContext.state.farms !== null || undefined
        ? farmContext.state.farms.map(farm => (
            <div key={Date.now() + Math.random() * 325}>{farm.farmName}</div>
          ))
        : "No Farms"}
    </div>
  );
}
