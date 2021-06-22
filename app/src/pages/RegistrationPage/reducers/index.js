import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isAuth: false,
  useInfo: {},
  accessToken: null,
  isLoading: false,
  errors: null,
};

const registrationReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const result = payload.response;
      console.log(result);
      //alert(result.message);
      return {
        ...state,
        isLoading: false,
      };
    },
  },
  defaultState
);

export default registrationReducer;
