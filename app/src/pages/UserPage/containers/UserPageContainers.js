import React from "react";

import UserPageLayout from "../components/UserPageLayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ORDER_REQUEST } from "../actions";

const UserPageContainers = (props) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { orders, isLoading } = useSelector((state) => state.ordersData);

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, [dispatch]);

  return (
    <UserPageLayout isLoading={isLoading} userInfo={userInfo} orders={orders} />
  );
};

export default UserPageContainers;
