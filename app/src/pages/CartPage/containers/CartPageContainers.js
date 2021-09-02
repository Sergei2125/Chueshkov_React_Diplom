import React from "react";

import CartPageLayout from "../components/CartPageLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CART_STATE_REQUEST,
  MAKE_ORDER_REQUEST,
  REMOVE_ITEM_REQUEST,
} from "../actions";
import { useCallback } from "react";
import { CHANGE_QUANTITY_ITEM_REQUEST } from "../actions";

const CartPageContainers = (props) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartState);

  useEffect(() => {
    dispatch(CART_STATE_REQUEST());
  }, [dispatch]);

  const handleRemoveItemFromCart = useCallback(
    (item) => {
      dispatch(REMOVE_ITEM_REQUEST(item.id));
    },
    [dispatch]
  );

  const handleAddQuantityItem = useCallback(
    (item) => {
      const result = { id: item.id, quantity: item.quantity + 1 };
      dispatch(CHANGE_QUANTITY_ITEM_REQUEST(result));
    },
    [dispatch]
  );

  const handleDecrementQuantityItem = useCallback(
    (item) => {
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
      }
      const result = {
        id: item.id,
        quantity: item.quantity,
      };
      dispatch(CHANGE_QUANTITY_ITEM_REQUEST(result));
    },
    [dispatch]
  );

  const handleMakeAnOrder = useCallback(
    (cartData) => {
      const { totalPrice, customerId, itemsList } = cartData;
      dispatch(MAKE_ORDER_REQUEST({ totalPrice, customerId, itemsList }));
    },
    [dispatch]
  );

  return (
    <CartPageLayout
      cartData={cartData}
      handleRemoveItemFromCart={handleRemoveItemFromCart}
      handleAddQuantityItem={handleAddQuantityItem}
      handleDecrementQuantityItem={handleDecrementQuantityItem}
      handleMakeAnOrder={handleMakeAnOrder}
    />
  );
};

export default CartPageContainers;
