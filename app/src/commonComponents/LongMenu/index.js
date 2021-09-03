import React from "react";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { REGUSER } from "../../commonComponents/Header/constant/regUser";
import { Link } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import styles from "../Header/component/HeaderLayout/styles.module.scss";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { cartData } = useSelector((state) => state.cartState);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={styles.iconMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 350,
            width: "20ch",
          },
        }}
      >
        <Box>
          {Object.entries(REGUSER).map(([routeName, path]) => (
            <Link to={path} key={routeName} className={styles.linkMobile}>
              <Button className={styles.header__button}>
                {routeName}
                {routeName === "CART" && (
                  <StyledBadge
                    badgeContent={cartData.quantity}
                    color="secondary"
                    className={styles.header__cart}
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                )}
              </Button>
            </Link>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}
