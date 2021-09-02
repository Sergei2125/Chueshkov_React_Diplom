import React from "react";
import PropTypes from "prop-types";
import CartItem from "../../../../commonComponents/CartItem";
import { Button, Box, Typography } from "@material-ui/core";

import styles from "./styles.module.scss";

const CartPageLayout = ({
  cartData,
  handleRemoveItemFromCart,
  handleAddQuantityItem,
  handleDecrementQuantityItem,
  handleMakeAnOrder,
}) => {
  return (
    <Box className={styles.pageWrapper}>
      <Typography className={styles.cartCharacters}>
        Total price: {cartData.totalPrice}
      </Typography>
      <Typography className={styles.cartCharacters}>
        Quantity: {cartData.quantity}
      </Typography>
      <Box>
        {cartData?.itemsList?.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleRemoveItemFromCart={() => handleRemoveItemFromCart(item)}
            handleAddQuantityItem={() => handleAddQuantityItem(item)}
            handleDecrementQuantityItem={() =>
              handleDecrementQuantityItem(item)
            }
          />
        ))}
      </Box>

      <Button
        onClick={() => handleMakeAnOrder(cartData)}
        variant="contained"
        className={styles.buttonOrder}
        color="primary"
      >
        Сделать заказ
      </Button>
    </Box>
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
