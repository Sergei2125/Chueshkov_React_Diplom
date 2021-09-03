import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

import UserInfo from "../../../../commonComponents/UserInfo";
import OrderCardInWork from "../../../../commonComponents/OrderCardInWork";

import styles from "./styles.module.scss";

const UserPageLayout = ({ userInfo, isLoading, orders }) => {
  return (
    <div className={styles.userPage}>
      <h2 className={styles.userPage__title}>User Information :</h2>
      <UserInfo userInfo={userInfo} />
      <h2 className={styles.userPage__title}>User orders :</h2>
      <div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            {orders.map((item) => (
              <OrderCardInWork item={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

UserPageLayout.propTypes = {
  userInfo: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  orders: PropTypes.array.isRequired,
};

export default UserPageLayout;
