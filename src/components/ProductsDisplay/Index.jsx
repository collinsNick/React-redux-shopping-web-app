import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/Index";
import SecondaryLayout from "../../Layouts/SecondaryLayout";
import EmptyCategoryPageContent from "../EmptyCategoryPageContent";

const Index = (props) => {
  let products = <EmptyCategoryPageContent />;
  let productsCount = props.products.length;
  if (productsCount > 0) {
    products = props.products.map((product) => {
      return (
        <ProductCard
          key={product.id}
          product={product}
          currency={props.usedCurrency}
        />
      );
    });
  }
  return (
    <SecondaryLayout
      results={`(${productsCount} products found)`}
      breadCrumbs={props.breadCrumbs}
    >
      {products}
    </SecondaryLayout>
  );
};

Index.propTypes = {
  products: PropTypes.array.isRequired,
  usedCurrency: PropTypes.object.isRequired,
  breadCrumbs: PropTypes.array.isRequired,
};

export default Index;
