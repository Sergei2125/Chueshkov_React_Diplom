import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

import { Backdrop, Fade, Modal } from "@material-ui/core";

const Popup = ({ isOpen, handleClose, handleOpen }) => {
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        className={styles.modalWrapper}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={styles.textWrapper}>
            <h2 id="transition-modal-title">Transition modalsdaaaaaaa</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

Popup.propTypes = {};

export default Popup;
