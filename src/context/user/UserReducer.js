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
  LOAD_USER,
  MAKE_FARMER,
  SUCC_MAKE_FARMER_USER,
  FAIL_MAKE_FARMER_USER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        message: "Getting user",
        getUserLoading: true
      };
    case FAIL_GET_USER:
      return {
        ...state,
        message: "Failed to fetch user",
        getUserLoading: false
      };
    case SUCC_GET_USER:
      return {
        ...state,
        message: "User fetch success",
        user: action.payload,
        getUserLoading: false
      };
    case ADD_USER:
      return {
        ...state,
        message: "Adding a new user",
        addUserLoading: true
      };
    case FAIL_ADD_USER:
      return {
        ...state,
        message: "Failed to add user",
        addUserLoading: false
      };
    case SUCC_ADD_USER:
      return {
        ...state,
        message: "User add success",
        user: action.payload,
        addUserLoading: false
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
        message: "Currently logging in...",
        loginUserLoading: true
      };
    case FAIL_LOG_USER:
      return {
        ...state,
        message: "Failed to login user.",
        loginUserLoading: false
      };
    case SUCC_LOG_USER:
      return {
        ...state,
        message: "User login success.",
        user: action.payload,
        loginUserLoading: false
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
    case MAKE_FARMER:
      return {
        ...state,
        message: 'Making user farmer'
      }
    case SUCC_MAKE_FARMER_USER:
      return {
        ...state,
        message: 'User now has farmer access',
        user: action.payload
      }
    case FAIL_MAKE_FARMER_USER:
      return {
        ...state,
        message: 'Failed to make user farmer',
        error: action.payload
      }
    default:
      return state;
  }
};
