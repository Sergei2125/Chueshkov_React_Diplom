import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Button } from "@material-ui/core";
import PokemonItem from "../../../../commonComponents/PokemonItem";

const PokemonDetailsLayout = ({ pokeInfo, isLoading }) => {
  return (
    <div>
      {isLoading ? <CircularProgress /> : <PokemonItem pokeInfo={pokeInfo} />}
    </div>
  );
};

PokemonDetailsLayout.propTypes = {};

export default PokemonDetailsLayout;
