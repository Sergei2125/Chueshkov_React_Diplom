import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import auth from "../pages/LoginPage/reducers";
import registration from "../pages/RegistrationPage/reducers";

const loginPageBlacklist = createBlacklistFilter("auth", ["errors"]);

const rootReducer = combineReducers({
  auth,
  registration,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transform: [loginPageBlacklist],
};

export default persistReducer(persistConfig, rootReducer);
