import { select, take, takeEvery } from "@redux-saga/core/effects";
import { SIGN_IN_SUCCESS } from "../actions";
import axios from "axios";
import api from "../../../api/config";
import { RENEDRATE } from "redux-rersist/es/constants";

export function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (axios.default.headers.Autorization = `Bearer ${response.accessToken}`);
    yield (api.default.headers.Autorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(RENEDRATE);

      const state = yield select(authSelector);

      const { accessToken } = state;

      if (accessToken) {
        axios.default.headers.Autorization = `Bearer ${response.accessToken}`;
        api.default.headers.Autorization = `Bearer ${response.accessToken}`;
      }
    } catch (err) {
      yield console.log(err);
    }
  }
}

export function* loginWatcher(action) {
  yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}
