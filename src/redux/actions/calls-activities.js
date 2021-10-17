import {
  GET_CALLS_REQUESTED,
  GET_CALLS_SUCCESS,
  GET_CALLS_FAILED,
} from "../types";

export function getAllCalls() {
  return {
    type: GET_CALLS_REQUESTED,
  };
}

export function getAllCallsSuccess(data) {
  console.log("ACTIONS ", data);
  return {
    type: GET_CALLS_SUCCESS,
    payload: data,
  };
}

export function getAllCallsFailed(error) {
  return {
    type: GET_CALLS_FAILED,
    payload: error,
  };
}
