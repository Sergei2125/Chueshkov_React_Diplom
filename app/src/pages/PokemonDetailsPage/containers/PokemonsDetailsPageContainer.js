import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useCallback } from "react";

import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";
import { ADD_TO_CART_REQUEST } from "../../CartPage/actions";

const PokemonsDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(params.id));
  }, [dispatch, params]);

  const { pokeInfo, isLoading } = useSelector(
    (state) => state.pokemonDetailsData
  );
  const handleAddToCart = useCallback(
    (pokeInfo) => {
      const { id, name, image, price } = pokeInfo;
      const quantity = 1;
      dispatch(ADD_TO_CART_REQUEST({ id, name, image, price, quantity }));
    },
    [dispatch]
  );

  return (
    <PokemonDetailsPageLayout
      pokeInfo={pokeInfo}
      isLoading={isLoading}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default PokemonsDetailsPageContainer;
