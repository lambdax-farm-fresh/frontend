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
  LOG_USER,
  FAIL_LOG_USER,
  SUCC_LOG_USER,
  CLEAR_USER,
  LOAD_USER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        message: "Getting user"
      };
    case FAIL_GET_USER:
      return {
        ...state,
        message: "Failed to fetch user"
      };
    case SUCC_GET_USER:
      return {
        ...state,
        message: "User fetch success",
        user: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        message: "Adding a new user"
      };
    case FAIL_ADD_USER:
      return {
        ...state,
        message: "Failed to add user"
      };
    case SUCC_ADD_USER:
      return {
        ...state,
        message: "User add success",
        user: action.payload
      };
    case UPD_USER:
      return {
        ...state,
        message: "UPDing a new user"
      };
    case FAIL_UPD_USER:
      return {
        ...state,
        message: "Failed to UPD user",
        error: action.payload
      };
    case SUCC_UPD_USER:
      return {
        ...state,
        message: "User upd success",
        user: action.payload
      };
    case DEL_USER:
      return {
        ...state,
        message: "DELing a new user"
      };
    case FAIL_DEL_USER:
      return {
        ...state,
        message: "Failed to DEL user"
      };
    case SUCC_DEL_USER:
      return {
        ...state,
        message: "User DEL success",
        user: action.payload
      };
    case LOG_USER:
      return {
        ...state,
        message: "LOGing a new user"
      };
    case FAIL_LOG_USER:
      return {
        ...state,
        message: "Failed to LOG user"
      };
    case SUCC_LOG_USER:
      return {
        ...state,
        message: "User LOG success",
        user: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};
