import { createAction } from "redux-actions";

export const CART_STATE_REQUEST = createAction("CART_STATE_REQUEST");
export const CART_STATE_SUCCESS = createAction("CART_STATE_SUCCESS");
export const CART_STATE_FAIL = createAction("CART_STATE_FAIL");

export const ADD_TO_CART_REQUEST = createAction("ADD_TO_CART_REQUEST");
export const ADD_TO_CART_SUCCESS = createAction("ADD_TO_CART_SUCCESS");
export const ADD_TO_CART_FAIL = createAction("ADD_TO_CART_FAIL");

export const REMOVE_ITEM_REQUEST = createAction("REMOVE_ITEM_REQUEST");
export const REMOVE_ITEM_SUCCESS = createAction("REMOVE_ITEM_SUCCESS");
export const REMOVE_ITEM_FAIL = createAction("REMOVE_ITEM_FAIL");

export const CHANGE_QUANTITY_ITEM_REQUEST = createAction(
  "CHANGE_QUANTITY_ITEM_REQUEST"
);
export const CHANGE_QUANTITY_ITEM_SUCCESS = createAction(
  "CHANGE_QUANTITY_ITEM_SUCCESS"
);
export const CHANGE_QUANTITY_ITEM_FAIL = createAction(
  "CHANGE_QUANTITY_ITEM_FAIL"
);

export const MAKE_ORDER_REQUEST = createAction("MAKE_ORDER_REQUEST");
export const MAKE_ORDER_SUCCESS = createAction("MAKE_ORDER_SUCCESS");
export const MAKE_ORDER_FAIL = createAction("MAKE_ORDER_FAIL");
