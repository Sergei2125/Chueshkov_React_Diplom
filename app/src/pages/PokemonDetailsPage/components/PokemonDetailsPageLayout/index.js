import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Box } from "@material-ui/core";
import PokemonCardDetails from "../../../../commonComponents/PokemonCardDetails";

import styles from "./styles.module.scss";

const PokemonDetailsPageLayout = ({ pokeInfo, isLoading, handleAddToCart }) => {
  return (
    <Box className={styles.pageWrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <PokemonCardDetails
          pokeInfo={pokeInfo}
          handleAddToCart={() => handleAddToCart(pokeInfo)}
        />
      )}
    </Box>
  );
};

PokemonDetailsPageLayout.propTypes = {
  pokeInfo: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default PokemonDetailsPageLayout;
