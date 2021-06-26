import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isAuth: false,
  userInfo: {},
  accessToken: null,
  isLoading: false,
  errors: null,
};

const registrationReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state, { payload }) => {
      const { passwordRepeat, ...registrationValues } = payload;
      console.log(registrationValues);
      return {
        ...state,
        userInfo: registrationValues,
        isLoading: true,
      };
    },

    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const result = payload.response;
      console.log(result);
      return {
        ...state,
        isLoading: false,
      };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
  },
  defaultState
);

export default registrationReducer;
