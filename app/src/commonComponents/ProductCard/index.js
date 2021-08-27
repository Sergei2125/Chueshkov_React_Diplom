import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Button } from "@material-ui/core";

import styles from "./styles.module.scss";

const ProductCard = ({
  classes,
  item,
  handleGetPokemonDetail,
  handleAddToCart,
}) => {
  return (
    <Card variant="outlined" className={styles.cardWrapper}>
      <CardContent className={styles.card}>
        <Typography className={styles.card__name}>{item.name}</Typography>
        <CardMedia className={styles.card__image} image={item.image} />
        <Button
          size="small"
          className={styles.card__buttonCart}
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon />
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          className={styles.card__buttonInfo}
          onClick={handleGetPokemonDetail}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleGetPokemonDetail: PropTypes.func.isRequired,
};

export default ProductCard;
