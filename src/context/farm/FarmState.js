import React, { useReducer } from "react";
import farmReducer from "./FarmReducer";
import farmContext from "./FarmContext";
import { GET_FARMS,
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
    SUCC_DEL_FARM } from '../types';

import Axios from 'axios';

const FarmState = props => {
  const initialState = {
    farmPulled: false
  };

  const [state, dispatch] = useReducer(farmReducer, initialState);

  const getFarms = () => {
    dispatch({ type: GET_FARMS });
    Axios.get('https://farm-fresh-produce.herokuapp.com/farms/')
         .then(res => dispatch({ type: SUCC_GET_FARMS, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_GET_FARMS }));
  }

  const addFarm = (farmObj) => {
    dispatch({ type: ADD_FARM });
    Axios.post('https://farm-fresh-produce.herokuapp.com/farms/', farmObj)
         .then(res => dispatch({ type: SUCC_ADD_FARM, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_ADD_FARM }));
  }

  const updateFarm = (farmObj) => {
    dispatch({ type: UPD_FARM });
    Axios.put(`https://farm-fresh-produce.herokuapp.com/farms/${farmObj.id}`, farmObj)
         .then(res => dispatch({ type: SUCC_UPD_FARM, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_UPD_FARM }));
  }

  const deleteFarm = (farm_id) => {
      dispatch({ type: DEL_FARM });
      Axios.delete(`https://farm-fresh-produce.herokuapp.com/farms/${farm_id}`)
           .then(res => dispatch({ type: SUCC_DEL_FARM, payload: res.data}))
           .catch(err => dispatch({ type: FAIL_DEL_FARM, error: err }))
  }


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