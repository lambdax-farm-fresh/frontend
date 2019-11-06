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
  
  export default (state, action) => {
    switch (action.type) {
      case GET_LOCATIONS:
        return {
          ...state,
          message: "Getting locations"
        };
      case FAIL_GET_LOCATIONS:
        return {
          ...state,
          message: "Failed to fetch locations",
          error: action.payload
        };
      case SUCC_GET_LOCATIONS:
        return {
          ...state,
          message: "Location fetch success",
          locations: action.payload.data.locations
        };
      case ADD_LOCATION:
        return {
          ...state,
          message: "Adding a new location"
        };
      case FAIL_ADD_LOCATION:
        return {
          ...state,
          message: "Failed to add location"
        };
      case SUCC_ADD_LOCATION:
        return {
          ...state,
          message: "Location add success",
          location: action.payload
        };
      case UPD_LOCATION:
        return {
          ...state,
          message: "UPDing a new location"
        };
      case FAIL_UPD_LOCATION:
        return {
          ...state,
          message: "Failed to UPD location",
          error: action.payload
        };
      case SUCC_UPD_LOCATION:
        return {
          ...state,
          message: "Location upd success",
          location: action.payload
        };
      case DEL_LOCATION:
        return {
          ...state,
          message: "DELing a new location"
        };
      case FAIL_DEL_LOCATION:
        return {
          ...state,
          message: "Failed to DEL location",
          error: action.payload
        };
      case SUCC_DEL_LOCATION:
        return {
          ...state,
          message: "Location DEL success",
          location: action.payload
        };
      default:
        return state;
    }
  };
  