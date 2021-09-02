import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";

const Popup = ({ classes, isOpen, handleOpen, handleClose, message }) => {
  return (
    <>
      <Dialog className={classes.dialog} open={isOpen} onClose={handleClose}>
        <DialogTitle>{"Error:"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(Popup);
