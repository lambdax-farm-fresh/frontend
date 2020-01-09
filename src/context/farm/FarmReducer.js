import {
  GET_FARMS,
  FAIL_GET_FARMS,
  SUCC_GET_FARMS,
  GET_FARM,
  FAIL_GET_FARM,
  SUCC_GET_FARM,
  ADD_FARM,
  FAIL_ADD_FARM,
  SUCC_ADD_FARM,
  UPD_FARM,
  FAIL_UPD_FARM,
  SUCC_UPD_FARM,
  DEL_FARM,
  FAIL_DEL_FARM,
  SUCC_DEL_FARM,
  GET_OWNED_FARMS,
  SUCC_OWNED_FARMS,
  FAIL_OWNED_FARMS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_FARMS:
      return {
        ...state,
        message: "Getting farms"
      };
    case FAIL_GET_FARMS:
      return {
        ...state,
        message: "Failed to fetch farms",
        error: action.payload
      };
    case SUCC_GET_FARMS:
      return {
        ...state,
        message: "Farm fetch success",
        farms: action.payload.data.farms
      };
      case GET_FARM:
        return {
          ...state,
          message: "Getting farm"
        };
      case FAIL_GET_FARM:
        return {
          ...state,
          message: "Failed to fetch farm",
          error: action.payload
        };
      case SUCC_GET_FARM:
        return {
          ...state,
          message: "Farm fetch success",
          farm: action.payload.data.farm
        };
    case ADD_FARM:
      return {
        ...state,
        message: "Adding a new farm"
      };
    case FAIL_ADD_FARM:
      return {
        ...state,
        message: "Failed to add farm"
      };
    case SUCC_ADD_FARM:
      return {
        ...state,
        message: "Farm add success",
        farm: action.payload
      };
    case UPD_FARM:
      return {
        ...state,
        message: "UPDing a new farm"
      };
    case FAIL_UPD_FARM:
      return {
        ...state,
        message: "Failed to UPD farm",
        error: action.payload
      };
    case SUCC_UPD_FARM:
      return {
        ...state,
        message: "Farm upd success",
        farm: action.payload
      };
    case DEL_FARM:
      return {
        ...state,
        message: "DELing a new farm"
      };
    case FAIL_DEL_FARM:
      return {
        ...state,
        message: "Failed to DEL farm",
        error: action.payload
      };
    case SUCC_DEL_FARM:
      return {
        ...state,
        message: "Farm DEL success",
        farm: action.payload
      };
    case GET_OWNED_FARMS:
      return {
        ...state,
        message: "Getting owned farms"
      }
    case SUCC_OWNED_FARMS:
      return {
        ...state,
        message: "Successfully got owned farms",
        ownedFarms: action.payload.data.farms
      }
    case FAIL_OWNED_FARMS:
      return {
        ...state,
        message: "Failed to get owned farms",
        error: action.payload
      }
    default:
      return state;
  }
};
