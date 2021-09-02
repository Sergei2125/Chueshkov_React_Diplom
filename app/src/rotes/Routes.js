import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routeNames";

import React from "react";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";
import ProductsPageContainer from "../pages/ProductsPage/containers/ProductsPageContainer";
import PokemonsDetailsPageContainer from "../pages/PokemonDetailsPage/containers/PokemonsDetailsPageContainer";

import PrivateRoute from "./PrivateRoute";
import CartPageContainers from "../pages/CartPage/containers/CartPageContainers";
import UserPageContainers from "../pages/UserPage/containers/UserPageContainers";

const Routes = () => {
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
        component={PokemonsDetailsPageContainer}
      />
      <PrivateRoute
        exact
        path={ROUTES.CART_PAGE}
        component={CartPageContainers}
      />
      <PrivateRoute
        exact
        path={ROUTES.USER_PAGE}
        component={UserPageContainers}
      />
    </Switch>
  );
};

export default Routes;
