import { handleActions } from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  orders: [],
  isLoading: false,
  errors: null,
};

const ordersDataReducer = handleActions(
  {
    [actions.GET_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_ORDER_SUCCESS]: (state, { payload }) => ({
      ...state,
      orders: payload.response,
      isLoading: false,
    }),
    [actions.GET_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default ordersDataReducer;
