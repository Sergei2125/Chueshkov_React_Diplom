import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import ProductCard from "../../../../commonComponents/ProductCard";
import Pagination from "@material-ui/lab/Pagination";

import styles from "./styles.module.scss";

const ProductsLayout = ({
  isLoading,
  itemsList,
  handlePageChange,
  handleGetPokemonDetail,
  handleAddToCart,
  currentPage,
}) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div>
          {itemsList.map((item) => (
            <ProductCard
              handleGetPokemonDetail={() => handleGetPokemonDetail(item.id)}
              key={item.id}
              item={item}
              handleAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      )}
      <Pagination
        className={styles.pagination}
        onChange={handlePageChange}
        page={currentPage}
        count={30}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};

ProductsLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemsList: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleGetPokemonDetail: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductsLayout;
