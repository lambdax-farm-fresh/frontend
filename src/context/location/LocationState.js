import React, { useReducer } from "react";
import locationReducer from "./LocationReducer";
import locationContext from "./LocationContext";
import {
  GET_LOCATIONS,
  FAIL_GET_LOCATIONS,
  SUCC_GET_LOCATIONS,
  ADD_LOCATION,
  FAIL_ADD_LOCATION,
  SUCC_ADD_LOCATION,
  UPD_LOCATION,
  FAIL_UPD_LOCATION,
  SUCC_UPD_LOCATION,
  DEL_LOCATION,
  FAIL_DEL_LOCATION,
  SUCC_DEL_LOCATION
} from "../types";

import Axios from "axios";

const address =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8181"
    : "https://farm-fresh-produce.herokuapp.com";

const LocationState = props => {
  const initialState = {
    message: ""
  };

  const [state, dispatch] = useReducer(locationReducer, initialState);

  const getLocations = () => {
    dispatch({ type: GET_LOCATIONS });
    Axios.get(`${address}/graphQl`, {
      params: {
        query: `
          {
            locations {
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
      .then(res => dispatch({ type: SUCC_GET_LOCATIONS, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_GET_LOCATIONS, payload: err }));
  };

  const addLocation = locationObj => {
    dispatch({ type: ADD_LOCATION });
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($farmId: Int!, $lat: String!, $lon: String!, $streetNumber: String!, $streetName: String!, $city: String!, $state: String!, $countryCode: String!, $zip: String!) {
            addLocation(
                farmId: $farmId,
                lat: $lat,
                lon: $lon,
                streetNumber: $streetNumber,
                streetName: $streetName,
                city: $city,
                state: $state,
                countryCode: $countryCode,
                zip: $zip
              ) {
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
        `,
      variables: {
        farmId: locationObj.farmId,
        lat: locationObj.lat,
        lon: locationObj.lon,
        streetNumber: locationObj.streetNumber,
        streetName: locationObj.streetName,
        city: locationObj.city,
        state: locationObj.state,
        countryCode: locationObj.countryCode,
        zip: locationObj.zip
      }
    })
      .then(res => dispatch({ type: SUCC_ADD_LOCATION, payload: res.data.data.addLocation }))
      .catch(err => dispatch({ type: FAIL_ADD_LOCATION, payload: err }));
  };

  const updateLocation = locationObj => {
    dispatch({ type: UPD_LOCATION });
    Axios.post(`${address}/graphQl`, {
      query: `
            mutation ($id: Int!, $farmId: Int!, $lat: String!, $lon: String!, $streetNumber: String!, $streetName: String!, $city: String!, $state: String!, $countryCode: String!, $zip: String!) {
              updLocation(
                  id: $id,
                  farmId: $farmId,
                  lat: $lat,
                  lon: $lon,
                  streetNumber: $streetNumber,
                  streetName: $streetName,
                  city: $city,
                  state: $state,
                  countryCode: $countryCode,
                  zip: $zip
                ) {
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
          `,
      variables: {
        id: locationObj.id,
        farmId: locationObj.farmId,
        lat: locationObj.lat,
        lon: locationObj.lon,
        streetNumber: locationObj.streetNumber,
        streetName: locationObj.streetName,
        city: locationObj.city,
        state: locationObj.state,
        countryCode: locationObj.countryCode,
        zip: locationObj.zip
      }
    })
      .then(res => dispatch({ type: SUCC_UPD_LOCATION, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_UPD_LOCATION, payload: err }));
  };

  const deleteLocation = location_id => {
    dispatch({ type: DEL_LOCATION });
    Axios.post(`${address}/graphQl`, {
      query: `
            mutation ($id: Int!) {
              delLocation(
                  id: $id
                ) {
                  id
                }
            }
          `,
      variables: {
        id: location_id
      }
    })
      .then(res => dispatch({ type: SUCC_DEL_LOCATION, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_DEL_LOCATION, error: err }));
  };

  return (
    <locationContext.Provider
      value={{
        state: state,
        getLocations,
        addLocation,
        updateLocation,
        deleteLocation
      }}
    >
      {props.children}
    </locationContext.Provider>
  );
};

export default LocationState;
