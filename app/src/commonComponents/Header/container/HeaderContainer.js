import { useDispatch } from "react-redux";
import { SIGN_OUT } from "../actions";
import HeaderLayout from "../component/HeaderLayout";
import { useCallback } from "react";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    console.log("dsad");
    dispatch(SIGN_OUT());
  }, []);

  return <HeaderLayout handleLogout={handleLogout} />;
};

export default HeaderContainer;
