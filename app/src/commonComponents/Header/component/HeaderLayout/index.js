import React from "react";
import PropTypes from "prop-types";
import { REGUSER } from "../../constant/regUser";
import { UNREGUSER } from "../../constant/unregUser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

import { Button, Box } from "@material-ui/core";

import styles from "./styles.module.scss";

const HeaderLayout = ({ handleLogout, numberOfOrder, handleGoToCart }) => {
  const { isAuth } = useSelector((state) => state.auth);

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  return (
    <Box>
      {isAuth ? (
        <Box className={styles.header}>
          {Object.entries(REGUSER).map(([routeName, path]) => (
            <Link to={path} key={routeName} className={styles.header__link}>
              <Button className={styles.header__button}>
                {routeName}
                {routeName === "CART" && (
                  <StyledBadge
                    badgeContent={numberOfOrder}
                    color="secondary"
                    className={styles.header__cart}
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                )}
              </Button>
            </Link>
          ))}

          <Button onClick={handleLogout} className={styles.header__butLogout}>
            LOGOUT
          </Button>
        </Box>
      ) : (
        <Box className={styles.header}>
          {Object.entries(UNREGUSER).map(([routeName, path]) => (
            <Link to={path} key={routeName} className={styles.header__link}>
              <Button className={styles.header__button}>{routeName}</Button>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

HeaderLayout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default HeaderLayout;