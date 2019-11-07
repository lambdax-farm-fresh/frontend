import React, { useEffect, useContext } from "react";

// import testLocations from "./testLocations";

import Location from "./Location";
import CreateLocation from "./CreateLocation";

import LocationContext from "../../context/location/LocationContext";

const Locations = props => {
  const locationState = useContext(LocationContext);

  // const [locations, setLocations] = useState([]);

  useEffect(() => {
    locationState.getLocations();
  });

  return (
    <>
      <div>
        <hr />
        <CreateLocation />

        {locationState.state.locations.map(location => {
          return <Location data={location} />;
        })}
        <hr />
      </div>
    </>
  );
};

export default Locations;
