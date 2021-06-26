import { select, take, takeEvery } from "@redux-saga/core/effects";
import { SIGN_IN_SUCCESS } from "../actions";
import axios from "axios";
import api from "../../../api/config";
import { REHYDRATE } from "redux-persist/es/constants";

const authSelector = (state) => state.auth;

export function* launchSaga(action) {
  if (action) {
    const { response } = action.payload;

    yield (axios.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
    yield (api.defaults.headers.Authorization = `Bearer ${response.accessToken}`);
  } else {
    try {
      yield take(REHYDRATE);

      const state = yield select(authSelector);

      const { accessToken } = state;

      if (accessToken) {
        axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (err) {
      yield console.log(err);
    }
  }
}

export function* loginWatcher() {
  yield takeEvery(SIGN_IN_SUCCESS, launchSaga);
}
