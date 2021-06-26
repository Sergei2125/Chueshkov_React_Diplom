import { takeEvery } from "@redux-saga/core/effects";
import { SIGN_OUT } from "../actions";

function logoutWorker() {
  localStorage.clear();

  window.location.reload(true);
}

function* logoutWatcher() {
  yield takeEvery(SIGN_OUT, logoutWorker);
}

export default logoutWatcher;
