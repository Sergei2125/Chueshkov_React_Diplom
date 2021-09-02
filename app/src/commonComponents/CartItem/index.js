import PropTypes from "prop-types";
import { Button, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import * as styles from "./styles.module.scss";

const CartItem = ({
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
        <Typography className={styles.card__name}>
          Price: {item.price}
        </Typography>
        <Box className={styles.card__counter}>
          <Button
            variant="contained"
            onClick={handleAddQuantityItem}
            className={styles.card__btn}
            color="primary"
          >
            +
          </Button>
          <Typography className={styles.card__quantity}>
            {item.quantity}
          </Typography>
          <Button
            className={styles.card__btn}
            variant="contained"
            color="primary"
            onClick={handleDecrementQuantityItem}
          >
            -
          </Button>
        </Box>

        <Button
          className={styles.card__buttondelete}
          onClick={handleRemoveItemFromCart}
          color="secondary"
        >
          <DeleteForeverIcon className={styles.card__delete} />
        </Button>
      </CardContent>
    </Card>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddQuantityItem: PropTypes.func.isRequired,
  handleDecrementQuantityItem: PropTypes.func.isRequired,
  handleRemoveItemFromCart: PropTypes.func.isRequired,
};

export default CartItem;
