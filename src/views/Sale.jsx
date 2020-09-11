import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { VISIBILITY_FILTERS } from "../static/constants";
import { getProductsByFilter, getUsedCurrency } from "../store/selectors";
import ProductsDisplay from "../components/ProductsDisplay/Index";

const Sale = (props) => {
  return (
    <ProductsDisplay
      products={props.productsProps}
      usedCurrency={props.usedCurrencyProp}
      breadCrumbs={[
        {
          label: "sale",
          to: "/sale",
        },
      ]}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    productsProps: getProductsByFilter(state, VISIBILITY_FILTERS.SALE),
    usedCurrencyProp: getUsedCurrency(state),
  };
};

Sale.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
  results: PropTypes.object,
};

export default connect(mapStateToProps)(Sale);
