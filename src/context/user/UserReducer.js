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

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
        return {
            ...state,
            message: 'Getting users'
        };
    case FAIL_GET_USERS:
        return {
            ...state,
            message: 'Failed to fetch users'
        };
    case SUCC_GET_USERS:
        return {
            ...state,
            message: 'User fetch success',
            users: action.payload
        };
    case ADD_USER:
        return {
            ...state,
            message: 'Adding a new user'
        };
    case FAIL_ADD_USER:
        return {
            ...state,
            message: 'Failed to add user'
        };
    case SUCC_ADD_USER:
        return {
            ...state,
            message: 'User add success',
            user: action.payload
        };
    case UPD_USER:
        return {
            ...state,
            message: 'UPDing a new user'
        };
    case FAIL_UPD_USER:
        return {
            ...state,
            message: 'Failed to UPD user'
        };
    case SUCC_UPD_USER:
        return {
            ...state,
            message: 'User upd success',
            user: action.payload
        };
    case DEL_USER:
        return {
            ...state,
            message: 'DELing a new user'
        };
    case FAIL_DEL_USER:
        return {
            ...state,
            message: 'Failed to DEL user'
        };
    case SUCC_DEL_USER:
        return {
            ...state,
            message: 'User DEL success',
            user: action.payload
        };
    case LOG_USER:
        return {
            ...state,
            message: 'LOGing a new user'
        };
    case FAIL_LOG_USER:
        return {
            ...state,
            message: 'Failed to LOG user'
        };
    case SUCC_LOG_USER:
        return {
            ...state,
            message: 'User LOG success',
            user: action.payload
        };
    default:
        return state;
  }
};