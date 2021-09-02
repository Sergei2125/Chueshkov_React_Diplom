import React, { useEffect, useCallback } from "react";
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
    dispatch(GET_POKEMONS_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(CART_STATE_REQUEST());
  }, [dispatch]);

  const handlePageChange = useCallback(
    (event, page) => {
      dispatch(GET_POKEMONS_REQUEST(page));
    },
    [dispatch]
  );

  const handleGetPokemonDetail = useCallback(
    (id) => {
      history.push(`${ROUTES.PRODUCTS_PAGE}/${id}`);
    },
    [history]
  );
  const handleAddToCart = useCallback(
    (item) => {
      item.quantity = 1;
      dispatch(ADD_TO_CART_REQUEST(item));
    },
    [dispatch]
  );
  return (
    <ProductsLayout
      isLoading={isLoading}
      itemsList={itemsList}
      handlePageChange={handlePageChange}
      handleGetPokemonDetail={handleGetPokemonDetail}
      handleAddToCart={handleAddToCart}
      currentPage={currentPage}
    />
  );
};

export default ProductsPageContainer;
