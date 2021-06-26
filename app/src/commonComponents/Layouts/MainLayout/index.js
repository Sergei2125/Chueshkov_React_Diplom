import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../rotes/routeNames";

import HeaderContainer from "../../Header/container/HeaderContainer";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.Wrapper}>
      <HeaderContainer />
      <div>{children}</div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
