import LoginLayout from "../components/LoginLayout";
import Popup from "../../../commonComponents/Popup";
import useModalPopup from "../../../hooks/useModalPopup";

import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { SIGN_IN_REQUEST } from "../actions";
import useForm from "../../../hooks/useForm";

import {
  validateEmail,
  validatePassword,
} from "../../RegistrationPage/validation";

import { ROUTES } from "../../../rotes/routeNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [loginValues, setLoginValues] = useForm({
    email: "",
    password: "",
  });

  const isLoginEmailValid = useMemo(
    () => validateEmail(loginValues.email),
    [loginValues.email]
  );

  const isLoginPasswordValid = useMemo(
    () => validatePassword(loginValues.password),
    [loginValues.password]
  );

  const isFormLoginValid = useMemo(
    () => isLoginPasswordValid && isLoginEmailValid,
    [isLoginEmailValid, isLoginPasswordValid]
  );
  const isLoadingValue = useSelector((state) => state.auth.isLoading);
  const { isAuth, errors } = useSelector((state) => state.auth);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log(loginValues);
      dispatch(SIGN_IN_REQUEST(loginValues));
    },
    [dispatch, loginValues]
  );

  useEffect(() => {
    if (isAuth) {
      history.push(ROUTES.PRODUCTS_PAGE);
    }
  }, [isAuth, history]);

  const [isModalOpen, handleOpen, handleClose] = useModalPopup();

  return (
    <>
      <LoginLayout
        errors={errors}
        handleSubmit={handleSubmit}
        handleOpen={handleOpen}
        isLoading={isLoadingValue}
        isFormLoginValid={isFormLoginValid}
        setLoginValues={setLoginValues}
      />
      {!isAuth && !isLoadingValue && (
        <Popup
          isOpen={isModalOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          message={errors}
        />
      )}
    </>
  );
};

export default LoginPageContainer;
