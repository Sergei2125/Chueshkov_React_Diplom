import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  pokeInfo: {},
  isLoading: false,
  errors: null,
};

const pokemonDetailsDataReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokeInfo: payload.response,
    }),
    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default pokemonDetailsDataReducer;
