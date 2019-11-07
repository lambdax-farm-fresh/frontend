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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <hr />
        <CreateLocation />

        {locationState.state.locations !== undefined | null ? locationState.state.locations.map(location => {
          return <Location key={Date.now() + Math.random()*323} data={location} />;
        }) : "No Locations Found"}
        <hr />
      </div>
    </>
  );
};

export default Locations;
