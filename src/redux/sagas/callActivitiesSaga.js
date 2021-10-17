import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { API_GET_ALL_CALLS } from "../api";

// get all calls
function getAllCalls() {
  return axios
    .get(API_GET_ALL_CALLS)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error in getAllCalls saga: " + error);
      return error;
    });
}

function* fetchAllCalls() {
  try {
    const data = yield call(getAllCalls);
    console.log("DATA ", data);
    yield put({ type: "GET_CALLS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_CALLS_FAILED", error: error });
  }
}

function* callActivitiesSaga() {
  yield takeLatest("GET_CALLS_REQUESTED", fetchAllCalls);
}

export default callActivitiesSaga;
