import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./routeNames";
import { useSelector } from "react-redux";

import React from "react";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";

const Routes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Switch>
      <Route
        exact
        path={
          !isAuth ? ROUTES.LOGIN_PAGE : <Redirect to={ROUTES.PRODUCTS_PAGE} />
        }
        component={!isAuth ? LoginPageContainer : ProductsPageContainer}
      />
      <Route
        exact
        path={ROUTES.REGISTRATION_PAGE}
        component={RegistrationPageContainer}
      />
    </Switch>
  );
};

export default Routes;
