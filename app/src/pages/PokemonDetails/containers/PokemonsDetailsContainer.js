import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import PokemonDetailsLayout from "../components/PokemonDetailsLayout";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonsDetailsContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(params.id));
  }, []);
  console.log(params);

  const { pokeInfo, isLoading } = useSelector(
    (state) => state.pokemonDetailsData
  );
  console.log(pokeInfo);

  return <PokemonDetailsLayout pokeInfo={pokeInfo} isLoading={isLoading} />;
};

PokemonsDetailsContainer.propTypes = {};

export default PokemonsDetailsContainer;
