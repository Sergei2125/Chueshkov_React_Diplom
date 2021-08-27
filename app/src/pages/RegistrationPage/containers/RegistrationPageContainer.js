import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";

import RegistrationLayout from "../components/RegistrationLayout";

import useForm from "../../../hooks/useForm";
import { SIGN_UP_REQUEST } from "../actions";

import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validatePhone,
} from "../validation";
import { ROUTES } from "../../../rotes/routeNames";
import Popup from "../../../commonComponents/Popup";
import useModalPopup from "../../../hooks/useModalPopup";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { errors, message } = useSelector((state) => state.registration);

  const [registrationValues, setRegistrationValues] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      addressLine1: "",
      addressLine2: "",
    },
    gender: "male",
    passwordRepeat: "",
    password: "",
    phone: "",
  });

  const isFormEmailValid = useMemo(
    () => validateEmail(registrationValues.email),
    [registrationValues.email]
  );
  const isFormFirstNameValid = useMemo(
    () => validateFirstName(registrationValues.firstName),
    [registrationValues.firstName]
  );
  const isFormLastNameValid = useMemo(
    () => validateLastName(registrationValues.lastName),
    [registrationValues.lastName]
  );

  const isFormPasswordValid = useMemo(() => {
    return (
      validatePassword(registrationValues.password) &&
      registrationValues.password === registrationValues.passwordRepeat
    );
  }, [registrationValues.password, registrationValues.passwordRepeat]);

  const isFormPhoneValid = useMemo(
    () => validatePhone(registrationValues.phone),
    [registrationValues.phone]
  );
  const isFormDataValid = useMemo(
    () =>
      isFormEmailValid &&
      isFormFirstNameValid &&
      isFormLastNameValid &&
      isFormPasswordValid &&
      isFormPhoneValid,
    [
      isFormEmailValid,
      isFormFirstNameValid,
      isFormLastNameValid,
      isFormPasswordValid,
      isFormPhoneValid,
    ]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { passwordRepeat, ...userData } = registrationValues;
      console.log(registrationValues);
      dispatch(SIGN_UP_REQUEST(userData));
    },
    [dispatch, registrationValues]
  );

  const handleGoTOLoginPage = useCallback(() => {
    history.push(ROUTES.LOGIN_PAGE);
  }, []);

  const [isModalOpen, handleOpen, handleClose] = useModalPopup();

  useEffect(() => {
    if (errors) handleOpen();
  }, [errors]);

  return (
    <>
      <RegistrationLayout
        handleGoTOLoginPage={handleGoTOLoginPage}
        message={message}
        errors={errors}
        handleSubmit={handleSubmit}
        setRegistrationValues={setRegistrationValues}
        isFormDataValid={isFormDataValid}
        registrationValues={registrationValues}
      />
      <Popup
        isOpen={isModalOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        message={errors}
      />
    </>
  );
};

export default RegistrationPageContainer;
