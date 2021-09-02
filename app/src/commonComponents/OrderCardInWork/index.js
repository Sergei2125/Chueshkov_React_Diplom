import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import StopIcon from "@material-ui/icons/Stop";
import FolderIcon from "@material-ui/icons/Folder";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

import styles from "./styles.module.scss";

const OrderCardInWork = ({ item, handleOpenOrder }) => {
  const [open, setOpen] = React.useState(false);

  handleOpenOrder = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleOpenOrder}>
        <ListItemIcon>
          <FolderIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={item._id} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={styles.orders}>
          <ListItem>
            <ListItemIcon className={styles.addressItem}>
              <StopIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Total price: {item.totalPrice} </ListItemText>
          </ListItem>
          {item?.itemsList?.map((element) => (
            <ListItem key={element.id} className={styles.card__content}>
              <CardMedia
                className={styles.card__image}
                image={element.image}
                title="Paella dish"
              />
              <Typography className={styles.card__name}>
                {element.name}
              </Typography>
              <Typography className={styles.card__name}>
                Quantity: {element.quantity}
              </Typography>
              <Typography className={styles.card__name}>
                Price: {element.price}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

OrderCardInWork.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OrderCardInWork;
