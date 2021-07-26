import React from "react";
import PropTypes from "prop-types";
import PokemonCardinCart from "../../../../commonComponents/OrderItem";
import { Button } from "@material-ui/core";

import styles from "./styles.module.scss";

const CartPageLayout = ({
  cartData,
  handleRemoveItemFromCart,
  handleAddQuantityItem,
  handleDecrementQuantityItem,
  handleMakeAnOrder,
}) => {
  return (
    <div className={styles.pageWrapper}>
      <p>Total price: {cartData.totalPrice}</p>
      <p>Quantity: {cartData.quantity}</p>
      <div>
        {cartData?.itemsList?.map((item) => (
          <PokemonCardinCart
            key={item.id}
            item={item}
            handleRemoveItemFromCart={() => handleRemoveItemFromCart(item)}
            handleAddQuantityItem={() => handleAddQuantityItem(item)}
            handleDecrementQuantityItem={() =>
              handleDecrementQuantityItem(item)
            }
          />
        ))}
      </div>

      <Button
        onClick={() => handleMakeAnOrder(cartData)}
        variant="contained"
        className={styles.buttonOrder}
        color="secondary"
      >
        Сделать заказ
      </Button>
    </div>
  );
};

CartPageLayout.propTypes = {
  cartData: PropTypes.object.isRequired,
  handleAddQuantityItem: PropTypes.func.isRequired,
  handleRemoveItemFromCart: PropTypes.func.isRequired,
  handleDecrementQuantityItem: PropTypes.func.isRequired,
  handleMakeAnOrder: PropTypes.func.isRequired,
};

export default CartPageLayout;
