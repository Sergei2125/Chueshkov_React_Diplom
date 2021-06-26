import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isAuth: false,
  userInfo: {},
  accessToken: null,
  isLoading: false,
  errors: null,
};

const authReducer = handleActions(
  {
    [actions.SIGN_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...accountInfo } = payload.response;
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userInfo: accountInfo,
        accessToken,
      };
    },
    [actions.SIGN_IN_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
  },
  defaultState
);

export default authReducer;
