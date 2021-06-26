import React from "react";
import { CircularProgress, Button } from "@material-ui/core";
import ProductCard from "../../../../commonComponents/ProductCard";
import Pagination from "@material-ui/lab/Pagination";

import styles from "./styles.module.scss";

const ProductsLayout = ({
  isLoading,
  itemsList,
  handlePageChange,
  handleGetPokemonDetail,
}) => {
  return (
    <div className={styles.productPageWrapper}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div>
          {itemsList.map((item) => (
            <ProductCard
              handleGetPokemonDetail={() => handleGetPokemonDetail(item.id)}
              key={item.id}
              itemName={item.name}
              itemId={item.id}
              itemImage={item.image}
              itemPrice={item.price}
            />
          ))}
        </div>
      )}
      <Pagination
        className={styles.pagination}
        onChange={handlePageChange}
        count={30}
        variant="outlined"
        color="secondary"
      />
    </div>
  );
};

export default ProductsLayout;
