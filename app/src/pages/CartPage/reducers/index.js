import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  cartData: {},
  isLoading: false,
  errors: null,
};

const cartStateReducer = handleActions(
  {
    [actions.CART_STATE_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.CART_STATE_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      cartData: payload.response,
    }),
    [actions.CART_STATE_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
    [actions.ADD_TO_CART_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => ({
      ...state,
      cartData: payload.response,
    }),
    [actions.ADD_TO_CART_FAIL]: (state, { payload }) => ({
      ...state,
      errors: payload,
    }),
    [actions.REMOVE_ITEM_REQUEST]: (state) => ({ ...state }),
    [actions.REMOVE_ITEM_SUCCESS]: (state, { payload }) => {
      const newArray = state.cartData.itemsList;
      const result = newArray.filter(
        (item) => !(item.id === payload.response.removedItemId)
      );
      console.log(result);
      return {
        ...state,
        cartData: {
          ...state.cartData,
          totalPrice: payload.response.cartState.totalPrice,
          quantity: payload.response.cartState.quantity,
          itemsList: result,
        },
      };
    },

    [actions.REMOVE_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      errors: payload,
    }),
    [actions.CHANGE_QUANTITY_ITEM_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [actions.CHANGE_QUANTITY_ITEM_SUCCESS]: (state, { payload }) => {
      const newArray = state.cartData.itemsList;
      const result = newArray.map((item) => {
        if (item.id === payload.response.updatedItem.id) {
          return payload.response.updatedItem;
        } else return item;
      });
      return {
        ...state,
        cartData: {
          ...state.cartData,
          totalPrice: payload.response.cartState.totalPrice,
          quantity: payload.response.cartState.quantity,
          itemsList: result,
        },
      };
    },
    [actions.CHANGE_QUANTITY_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      errors: payload,
    }),
    [actions.MAKE_ORDER_REQUEST]: (state, { payload }) => ({
      ...state,
    }),
    [actions.MAKE_ORDER_SUCCESS]: (state) => defaultState,
    [actions.MAKE_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      errors: payload,
    }),
  },
  defaultState
);

export default cartStateReducer;
