import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./routeNames";
import { useSelector } from "react-redux";

import React from "react";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import PokemonsDetailsContainer from "../pages/PokemonDetails/containers/PokemonsDetailsContainer";

import PrivateRoute from "./PrivateRoute";
import CartPageContainers from "../pages/CartPage/containers/CartPageContainers";

const Routes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN_PAGE} component={LoginPageContainer} />
      <PrivateRoute
        exact
        path={ROUTES.PRODUCTS_PAGE}
        component={ProductsPageContainer}
      />
      <Route
        exact
        path={ROUTES.REGISTRATION_PAGE}
        component={RegistrationPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.POKEMON_DETAILS_PAGE}
        component={PokemonsDetailsContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.CART_PAGE}
        component={CartPageContainers}
      />
    </Switch>
  );
};

export default Routes;
