import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import * as styles from "./styles.module.scss";

const PokemonCardinCart = ({
  item,
  handleRemoveItemFromCart,
  handleAddQuantityItem,
  handleDecrementQuantityItem,
}) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.card__content}>
        <CardMedia
          className={styles.card__image}
          image={item.image}
          title="Paella dish"
        />
        <Typography className={styles.card__name}>
          {item.name} id: {item.id}
        </Typography>
        <Typography className={styles.card__counter}>
          <Button variant="outlined" onClick={handleAddQuantityItem}>
            +
          </Button>
          <Typography className={styles.card__quantity}>
            {item.quantity}
          </Typography>
          <Button variant="outlined" onClick={handleDecrementQuantityItem}>
            -
          </Button>
        </Typography>
        <Typography>price: {item.price}</Typography>
        <Button
          className={styles.card__buttondelete}
          onClick={handleRemoveItemFromCart}
        >
          <DeleteForeverIcon className={styles.card__delete} />
        </Button>
      </CardContent>
    </Card>
  );
};

PokemonCardinCart.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddQuantityItem: PropTypes.func.isRequired,
  handleDecrementQuantityItem: PropTypes.func.isRequired,
  handleRemoveItemFromCart: PropTypes.func.isRequired,
};

export default PokemonCardinCart;
