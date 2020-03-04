import React, { useContext, useEffect, useState } from "react";
import FarmContext from "../../../context/farm/FarmContext";
import axios from "axios";

export default function LocationPage(props) {
  const Farms = useContext(FarmContext);
  const [locationObj, setLocationObj] = useState(null);

  useEffect(() => {
    const {
      match: { params }
    } = props;

    const address =
      process.env.NODE_ENV === "development"
        ? "http://localhost:8181"
        : "https://farm-fresh-produce.herokuapp.com";

    if (!locationObj) {
      axios
        .get(`${address}/graphQl`, {
          params: {
            query: `
            {
              location(id: ${params.locationId}) {
                id
                farmId
                lat
                lon
                streetNumber
                streetName
                city
                state
                countryCode
                zip
              }
            }
          `
          },
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          console.log(res);
          setLocationObj(res.data.data.location);
          Farms.getFarm(locationObj.farmId);
        })
        .catch(err => setLocationObj({ streetNumber: "Not Found" }));
    }
  }, [Farms, locationObj, props]);

  return (
    <div>
      {locationObj ? (
        <div>
          {locationObj.loading === true ? (
            <div> Loading... </div>
          ) : (
            <div>{locationObj.city}</div>
          )}
        </div>
      ) : (
        <div>Location not found</div>
      )}
    </div>
  );
}
