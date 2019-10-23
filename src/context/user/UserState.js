import React, { useReducer } from "react";
import userReducer from "./UserReducer";
import userContext from "./UserContext";
import { GET_USER,
    FAIL_GET_USER,
    SUCC_GET_USER,
         ADD_USER,
    FAIL_ADD_USER,
    SUCC_ADD_USER,
         UPD_USER,
    FAIL_UPD_USER,
    SUCC_UPD_USER,
         DEL_USER,
    FAIL_DEL_USER,
    SUCC_DEL_USER } from '../types';

import Axios from 'axios';

// const address = process.env.NODE_ENV === 'development' ? 'http://localhost:8181' : 'https://farm-fresh-produce.herokuapp.com';

  const address = 'https://farm-fresh-produce.herokuapp.com';
  
const UserState = props => {
  const initialState = {
    user: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // const getUser = (firebaseId) => {
  //   dispatch({ type: GET_USER });
  //   Axios.get(`${address}/users/${firebaseId}`)
  //        .then(res => res.data)
  //        .catch(err => dispatch({ type: FAIL_GET_USER }));
  // }

  const addUser = (userObj) => {
    dispatch({ type: ADD_USER });
    Axios.post(`${address}/auth/register`, userObj)
         .then(res => dispatch({ type: SUCC_ADD_USER, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_ADD_USER }));
  }

  const updateUser = (userObj) => {
    dispatch({ type: UPD_USER });
    Axios.put(`${address}/users/${userObj.id}`, userObj)
         .then(res => dispatch({ type: SUCC_UPD_USER, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_UPD_USER }));
  }

  const deleteUser = (user_id) => {
      dispatch({ type: DEL_USER });
      Axios.delete(`${address}/users/${user_id}`)
           .then(res => dispatch({ type: SUCC_DEL_USER, payload: res.data}))
           .catch(err => dispatch({ type: FAIL_DEL_USER, error: err }))
  }


  return (
    <userContext.Provider
      value={{
        state: state,
        // getUser,
        addUser,
        updateUser,
        deleteUser
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;