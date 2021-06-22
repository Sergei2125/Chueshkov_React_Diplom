import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";

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

const RegistrationPageContainer = () => {
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
    gender: "",
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

  const isFormPasswordValid = useMemo(
    () => validatePassword(registrationValues.password),
    [registrationValues.password]
  );

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

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.log(registrationValues);
      dispatch(SIGN_UP_REQUEST(registrationValues));
    },
    [dispatch, registrationValues]
  );

  return (
    <RegistrationLayout
      handleSubmit={handleSubmit}
      setRegistrationValues={setRegistrationValues}
      isFormDataValid={isFormDataValid}
    />
  );
};

export default RegistrationPageContainer;
