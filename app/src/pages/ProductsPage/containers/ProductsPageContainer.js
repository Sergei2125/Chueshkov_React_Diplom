import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POKEMONS_REQUEST } from "../actions";

import { ROUTES } from "../../../rotes/routeNames";

import ProductsLayout from "../components/ProductsLayout";

import { useHistory } from "react-router-dom";
import { GET_POKEMON_DETAILS_REQUEST } from "../../PokemonDetails/actions";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, itemsList, currentPage } = useSelector(
    (state) => state.pokemonsData
  );

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST());
  }, []);

  const handlePageChange = useCallback((event, page) => {
    dispatch(GET_POKEMONS_REQUEST(page));
  }, []);

  const handleGetPokemonDetail = useCallback(
    (id) => {
      history.push(`${ROUTES.PRODUCTS_PAGE}/${id}`);
      console.log(id);
    },
    [history]
  );
  return (
    <ProductsLayout
      isLoading={isLoading}
      itemsList={itemsList}
      handlePageChange={handlePageChange}
      handleGetPokemonDetail={handleGetPokemonDetail}
    />
  );
};

export default ProductsPageContainer;
