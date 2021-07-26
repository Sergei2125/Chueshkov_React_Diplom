import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POKEMONS_REQUEST } from "../actions";
import { ADD_TO_CART_REQUEST } from "../../CartPage/actions";
import { CART_STATE_REQUEST } from "../../CartPage/actions";
import { ROUTES } from "../../../rotes/routeNames";

import ProductsLayout from "../components/ProductsLayout";

import { useHistory } from "react-router-dom";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, itemsList, currentPage } = useSelector(
    (state) => state.pokemonsData
  );

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST());
  }, []);

  useEffect(() => {
    dispatch(CART_STATE_REQUEST());
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
  const handleAddToCart = useCallback((item) => {
    item.quantity = 1;
    dispatch(ADD_TO_CART_REQUEST(item));
  }, []);
  return (
    <ProductsLayout
      isLoading={isLoading}
      itemsList={itemsList}
      handlePageChange={handlePageChange}
      handleGetPokemonDetail={handleGetPokemonDetail}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default ProductsPageContainer;
