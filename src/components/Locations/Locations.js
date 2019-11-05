import React from "react";

import Location from "./Location";
import CreateLocation from "./CreateLocation";

const Locations = props => {
  return (
    <>
      <div>List of Locations</div>
      <div>Map over locations</div>
      <div>
        <Location />
        <CreateLocation />
      </div>
    </>
  );
};

export default Locations;
