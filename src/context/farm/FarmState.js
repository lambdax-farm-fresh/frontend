import React, { useReducer } from "react";
import farmReducer from "./FarmReducer";
import farmContext from "./FarmContext";
import {
  GET_FARMS,
  FAIL_GET_FARMS,
  SUCC_GET_FARMS,
  ADD_FARM,
  FAIL_ADD_FARM,
  SUCC_ADD_FARM,
  UPD_FARM,
  FAIL_UPD_FARM,
  SUCC_UPD_FARM,
  DEL_FARM,
  FAIL_DEL_FARM,
  SUCC_DEL_FARM
} from "../types";

import Axios from "axios";

const address =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8181"
    : "https://farm-fresh-produce.herokuapp.com";

const FarmState = props => {
  const initialState = {
    farmPulled: false
  };

  const [state, dispatch] = useReducer(farmReducer, initialState);

  const getFarms = () => {
    dispatch({ type: GET_FARMS });
    Axios.get(`${address}/graphQl`, {
      params: {
        query: `
          {
            farms {
              id
              userId
              farmName
            }
          }
        `
      },
      headers: { "Content-Type": "application/json" }
    })
      .then(res => dispatch({ type: SUCC_GET_FARMS, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_GET_FARMS, payload: err }));
  };

  // const pullLocations = (id) => {
  //   dispatch({ type: PULL_FARM_LOCATIONS });
  //   Axios.get(``)
  // }

  const addFarm = farmObj => {
    dispatch({ type: ADD_FARM });
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($userId: Int!, $farmName: String!) {
            addFarm(
                userId: $userId,
                farmName: $farmName
              ) {
                farmName
              }
          }
        `,
      variables: {
        userId: farmObj.userId,
        farmName: farmObj.farmName
      }
    })
      .then(res => dispatch({ type: SUCC_ADD_FARM, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_ADD_FARM, payload: err }));
  };

  const updateFarm = farmObj => {
    dispatch({ type: UPD_FARM });
    Axios.post(`${address}/graphQl`, {
      query: `
            mutation ($id: Int!, $userId: Int!, $farmName: String!) {
              updFarm(
                  id: $id,
                  userId: $userId,
                  farmName: $farmName
                ) {
                  farmName
                }
            }
          `,
      variables: {
        id: farmObj.id,
        userId: farmObj.userId,
        farmName: farmObj.farmName
      }
    })
      .then(res => dispatch({ type: SUCC_UPD_FARM, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_UPD_FARM, payload: err }));
  };

  const deleteFarm = farm_id => {
    dispatch({ type: DEL_FARM });
    Axios.post(`${address}/graphQl`, {
      query: `
            mutation ($id: Int!) {
              delFarm(
                  id: $id
                ) {
                  id
                }
            }
          `,
      variables: {
        id: farm_id
      }
    })
      .then(res => dispatch({ type: SUCC_DEL_FARM, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_DEL_FARM, error: err }));
  };

  return (
    <farmContext.Provider
      value={{
        state: state,
        getFarms,
        addFarm,
        updateFarm,
        deleteFarm
      }}
    >
      {props.children}
    </farmContext.Provider>
  );
};

export default FarmState;
