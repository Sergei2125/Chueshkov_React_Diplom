import LoginLayout from "../components/LoginLayout";

import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { SIGN_IN_REQUEST } from "../actions";
import useForm from "../../../hooks/useForm";

const LoginPageContainer = () => {
  const [loginValues, setLoginValues] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log(loginValues);
      dispatch(SIGN_IN_REQUEST(loginValues));
    },
    [dispatch, loginValues]
  );

  return (
    <LoginLayout setLoginValues={setLoginValues} handleSubmit={handleSubmit} />
  );
};

export default LoginPageContainer;
