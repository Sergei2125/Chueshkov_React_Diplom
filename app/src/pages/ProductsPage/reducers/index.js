import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  itemsList: [],
  currentPage: 1,
  isLoading: false,
  errors: null,
};

const pokemonsDataReducer = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        itemsList: payload.response,
      };
    },

    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default pokemonsDataReducer;
