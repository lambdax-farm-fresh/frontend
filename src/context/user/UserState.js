import React, { useReducer } from "react";
import userReducer from "./UserReducer";
import userContext from "./UserContext";
import {
  GET_USER,
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
  SUCC_DEL_USER,
  CLEAR_USER,
  LOAD_USER,
  MAKE_FARMER,
  SUCC_MAKE_FARMER_USER,
  FAIL_MAKE_FARMER_USER
} from "../types";

import Axios from "axios";

const address =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8181"
    : "https://farm-fresh-produce.herokuapp.com";


const UserState = props => {
  const initialState = {
    user: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const clearUser = () => {
    dispatch({ type: CLEAR_USER })
  }

  const loadUser = (user) => {
    dispatch({ type: LOAD_USER, payload: user })
  }

  const makeFarmer = (user_id) => {
    dispatch({ type: MAKE_FARMER })
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($id: Int!) {
            makeFarmer(
                id: $id
              ) {
                id
              }
          }
        `,
      variables: {
        id: user_id
      }
    })
      .then(res => dispatch({ type: SUCC_MAKE_FARMER_USER, payload: res.data.data.user }))
      .catch(err => dispatch({ type: FAIL_MAKE_FARMER_USER, error: err }));
  }

  const getUser = firebaseId => {
    dispatch({ type: GET_USER });
    Axios.get(`${address}/graphQl`, {
      params: {
        query: `
          query ($firebaseId: String!) {
            user(firebaseId: $firebaseId) {
              id
              firstName
              lastName
              email
              firebaseId
              lat
              lon
              picture
              rankrole
            }
          }
        `,
        variables: {
          firebaseId: firebaseId
        }
      },
      headers: { "Content-Type": "application/json" }
    })
      .then(res =>
        dispatch({ type: SUCC_GET_USER, payload: res.data.data.user })
      )
      .catch(err => dispatch({ type: FAIL_GET_USER, payload: err.data }));
  };

  const addUser = userObj => {
    dispatch({ type: ADD_USER });
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($firstName: String!, $lastName: String!, $email: String!, $firebaseId: String!, $picture: String, $lat: String, $lon: String) {
            addUser(
              firstName: $firstName,
              lastName: $lastName,
              email: $email,
              firebaseId: $firebaseId,
              picture: $picture,
              lat: $lat,
              lon: $lon
              ) {
                id
                firstName
                lastName
                firebaseId
                email
                picture
                lat
                lon
              }
          }
        `,
      variables: {
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        firebaseId: userObj.firebaseId,
        picture: userObj.picture,
        lat: userObj.lat,
        lon: userObj.lon
      }
    })
      .then(res =>
        dispatch({ type: SUCC_ADD_USER, payload: res.data.data.addUser })
      )
      .catch(err => dispatch({ type: FAIL_ADD_USER }));
  };

  const updateUser = userObj => {
    dispatch({ type: UPD_USER });
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($id: Int!, $firstName: String!, $lastName: String!, $email: String!, $firebaseId: String!, $picture: String, $lat: String, $lon: String) {
            updUser(
              id: $id,
              firstName: $firstName,
              lastName: $lastName,
              email: $email,
              firebaseId: $firebaseId,
              picture: $picture,
              lat: $lat,
              lon: $lon
              ) {
                id
                firstName
                lastName
                firebaseId
                email
                picture
                lat
                lon
              }
          }
        `,
      variables: {
        id: userObj.id,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        firebaseId: userObj.firebaseId,
        picture: userObj.picture,
        lat: userObj.lat,
        lon: userObj.lon
      }
    })
      .then(res => dispatch({ type: SUCC_UPD_USER, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_UPD_USER, payload: err }));
  };

  const deleteUser = user_id => {
    dispatch({ type: DEL_USER });
    Axios.post(`${address}/graphQl`, {
      query: `
          mutation ($id: Int!) {
            delUser(
                id: $id
              ) {
                id
              }
          }
        `,
      variables: {
        id: user_id
      }
    })
      .then(res => dispatch({ type: SUCC_DEL_USER, payload: res.data }))
      .catch(err => dispatch({ type: FAIL_DEL_USER, error: err }));
  };

  return (
    <userContext.Provider
      value={{
        state: state,
        getUser,
        addUser,
        updateUser,
        deleteUser,
        clearUser,
        loadUser,
        makeFarmer
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
