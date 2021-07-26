import React from "react";
import { useState } from "react";
import { useCallback } from "react";

import UserPageLayout from "../components/UserPageLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ORDER_REQUEST } from "../actions";
import Popup from "../../../commonComponents/Popup";
import { useModalPopup } from "../../../hooks";

const UserPageContainers = (props) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { orders, isLoading } = useSelector((state) => state.ordersData);

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, []);

  const [isModalOpen, handleOpen, handleClose] = useModalPopup();

  return (
    <>
      <UserPageLayout
        isLoading={isLoading}
        userInfo={userInfo}
        orders={orders}
      />
      <Popup
        isOpen={isModalOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default UserPageContainers;
