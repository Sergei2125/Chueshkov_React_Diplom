import "regenerator-runtime/runtime";
import { all } from "@redux-saga/core/effects";

import apiCallsSaga from "../helpers/request/watchRequest";
import { launchSaga, loginWatcher } from "../pages/LoginPage/sagas/loginSaga";
import logoutWatcher from "../commonComponents/Header/sagas/logoutSaga";

function* rootSaga() {
  yield all([launchSaga(), loginWatcher(), apiCallsSaga(), logoutWatcher()]);
}

export default rootSaga;
