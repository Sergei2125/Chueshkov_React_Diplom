import React from "react";
import PropTypes from "prop-types";

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

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
