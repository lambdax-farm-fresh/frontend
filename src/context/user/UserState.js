import React, { useReducer } from "react";
import userReducer from "./userReducer";
import userContext from "./userContext";
import { GET_USERS,
    FAIL_GET_USERS,
    SUCC_GET_USERS,
         ADD_USER,
    FAIL_ADD_USER,
    SUCC_ADD_USER,
         UPD_USER,
    FAIL_UPD_USER,
    SUCC_UPD_USER,
         DEL_USER,
    FAIL_DEL_USER,
    SUCC_DEL_USER,
         LOG_USER,
    FAIL_LOG_USER,
    SUCC_LOG_USER } from '../types';

import Axios from 'axios';

const UserState = props => {
  const initialState = {
    users: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

//   const getUsers = (id) => {
//     dispatch({ type: GET_USERS });
//     Axios.get('https://farm-fresh-produce.herokuapp.com/users/' + id)
//          .then(res => dispatch({ type: SUCC_GET_USERS, payload: res.data }))
//          .catch(err => dispatch({ type: FAIL_GET_USERS }));
//   }

  const loginUser = async (userObj) => {
      dispatch({ type: LOG_USER });
      await Axios.post('https://farm-fresh-produce.herokuapp.com/auth/login', userObj)
        .then(res => dispatch({ type: SUCC_LOG_USER, payload: res.data }))
        .catch(err => dispatch({ type: FAIL_LOG_USER }));
  }

  const addUser = (userObj) => {
    dispatch({ type: ADD_USER });
    Axios.post('https://farm-fresh-produce.herokuapp.com/auth/register', userObj)
         .then(res => dispatch({ type: SUCC_ADD_USER, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_ADD_USER }));
  }

  const updateUser = (userObj) => {
    dispatch({ type: UPD_USER });
    Axios.put(`https://farm-fresh-produce.herokuapp.com/users/${userObj.id}`, userObj)
         .then(res => dispatch({ type: SUCC_UPD_USER, payload: res.data }))
         .catch(err => dispatch({ type: FAIL_UPD_USER }));
  }

  const deleteUser = (user_id) => {
      dispatch({ type: DEL_USER });
      Axios.delete(`https://farm-fresh-produce.herokuapp.com/users/${user_id}`)
           .then(res => dispatch({ type: SUCC_DEL_USER, payload: res.data}))
           .catch(err => dispatch({ type: FAIL_DEL_USER, error: err }))
  }


  return (
    <userContext.Provider
      value={{
        state: state,
        addUser,
        updateUser,
        deleteUser,
        loginUser
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;