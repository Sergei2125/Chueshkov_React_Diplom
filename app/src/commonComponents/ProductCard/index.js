import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Button } from "@material-ui/core";

import styles from "./styles.module.scss";

const ProductCard = ({ item, handleGetPokemonDetail, handleAddToCart }) => {
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
    // <div className={styles.cardWrapper}>
    //   <button
    //     className={styles.buttonCard}
    //     variant="outlined"
    //     size="small"
    //     onClick={handleGetPokemonDetail}
    //   >
    //     {item.name}
    //   </button>
    //   <img src={item.image} />
    //   <p>Price: {item.price}</p>
    //   <Button
    //     className={styles.buttonCard}
    //     variant="outlined"
    //     onClick={handleAddToCart}
    //   >
    //     add to cart
    //   </Button>
    // </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleGetPokemonDetail: PropTypes.func.isRequired,
};

export default ProductCard;
