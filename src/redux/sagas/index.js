import { all } from "redux-saga/effects";
import callActivitiesSaga from "./callActivitiesSaga";

export default function* rootSaga() {
  yield all([callActivitiesSaga()]);
}
