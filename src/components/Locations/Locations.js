import React, { useState } from "react";

import testLocations from "./testLocations";

import Location from "./Location";
import CreateLocation from "./CreateLocation";

const Locations = props => {
  const [locations, setLocations] = useState(testLocations);

  return (
    <>
      <div>
        <hr />
        <CreateLocation />

        {locations.map(location => {
          return <Location data={location} />;
        })}
        <hr />
      </div>
    </>
  );
};

export default Locations;
