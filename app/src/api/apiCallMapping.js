import * as loginActions from "../pages/LoginPage/actions";
import * as loginAPI from "../pages/LoginPage/api";

import * as registrationActions from "../pages/RegistrationPage/actions";
import * as registrationAPI from "../pages/RegistrationPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [loginActions.SIGN_IN_REQUEST]: loginAPI.signIn,
    [registrationActions.SIGN_UP_REQUEST]: registrationAPI.signUp,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  console.log("FOUND FUNC TO CALL", mapping[action.type]);

  return mapping[action.type];
};

export default apiCallsMapping;
