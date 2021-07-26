import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { SIGN_OUT } from "../actions";
import HeaderLayout from "../component/HeaderLayout";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { REGUSER } from "../constant/regUser";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartData } = useSelector((state) => state.cartState);

  const numberOfOrder = useMemo(() => {
    return cartData.quantity;
  }, [cartData]);

  const handleLogout = useCallback(() => {
    dispatch(SIGN_OUT());
  }, []);

  const handleGoToCart = useCallback(() => {
    history.push(REGUSER.CART);
  }, []);
  return (
    <HeaderLayout
      handleLogout={handleLogout}
      numberOfOrder={numberOfOrder}
      handleGoToCart={handleGoToCart}
    />
  );
};

export default HeaderContainer;
