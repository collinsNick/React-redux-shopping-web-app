import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { VISIBILITY_FILTERS } from "../static/constants";
import { getProductsByFilter, getUsedCurrency } from "../store/selectors";
import ProductsDisplay from "../components/ProductsDisplay/Index";

const All = (props) => {
  return (
    <ProductsDisplay
      products={props.productsProps}
      usedCurrency={props.usedCurrencyProp}
      breadCrumbs={[
        {
          label: "all",
          to: "/all",
        },
      ]}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    productsProps: getProductsByFilter(state, VISIBILITY_FILTERS.ALL),
    usedCurrencyProp: getUsedCurrency(state),
  };
};

All.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(All);
