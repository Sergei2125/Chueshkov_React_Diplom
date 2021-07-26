import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import auth from "../pages/LoginPage/reducers";
import registration from "../pages/RegistrationPage/reducers";
import pokemonsData from "../pages/ProductsPage/reducers";
import pokemonDetailsData from "../pages/PokemonDetailsPage/reducers";
import cartState from "../pages/CartPage/reducers";
import addToCard from "../pages/ProductsPage/reducers";
import ordersData from "../pages/UserPage/reducers";

const loginPageBlacklist = createBlacklistFilter("auth", ["errors"]);

const rootReducer = combineReducers({
  addToCard,
  cartState,
  auth,
  registration,
  pokemonsData,
  pokemonDetailsData,
  ordersData,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transform: [loginPageBlacklist],
};

export default persistReducer(persistConfig, rootReducer);
