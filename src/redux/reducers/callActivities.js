import {
  GET_CALLS_REQUESTED,
  GET_CALLS_SUCCESS,
  GET_CALLS_FAILED,
} from "../types";

export const initialState = {
  callActivities: [],
  loading: true,
  error: false,
};

export default function callsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CALLS_REQUESTED:
      return {
        callActivities: [],
        loading: true,
      };
    case GET_CALLS_SUCCESS:
      console.log("REDUCER", action);
      return {
        ...state,
        callActivities: action.payload,
        loading: false,
        error: false,
      };
    case GET_CALLS_FAILED:
      return {
        ...state,
        callActivities: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
