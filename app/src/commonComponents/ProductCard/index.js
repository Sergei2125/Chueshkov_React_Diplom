import React from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

import styles from "./styles.module.scss";

const ProductCard = ({
  itemName,
  itemId,
  itemImage,
  itemPrice,
  handleGetPokemonDetail,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <button
        className={styles.buttonCard}
        variant="outlined"
        size="small"
        onClick={handleGetPokemonDetail}
      >
        {itemName}
      </button>
      <img src={itemImage} />
      <p>Price: {itemPrice}</p>
      <Button className={styles.buttonCard} variant="outlined">
        add to basket
      </Button>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
