import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../store/actions/shop";
import ProductCard from "../components/ProductCard/Index";
import SecondaryLayout from "../Layouts/SecondaryLayout";
import EmptyCategoryPageContent from "../components/EmptyCategoryPageContent";

class All extends Component {
  render() {
    let products = <EmptyCategoryPageContent />;
    let productsCount = this.props.productsProps.length;

    if (productsCount > 0) {
      products = this.props.productsProps.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            currency={this.props.usedCurrencyProp}
            addToCart={() =>
              this.props.addProductToCartProp(product.id, product.quantity)
            }
          />
        );
      });
    }
    return (
      <SecondaryLayout
        results={`(${productsCount} products found)`}
        breadCrumbs={[
          {
            label: "all",
            to: "/all",
          },
        ]}
      >
        {products}
      </SecondaryLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsProps: state.products,
    usedCurrencyProp: state.usedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCartProp: (productId, productQuantity) =>
      dispatch(addToCart(productId, productQuantity)),
  };
};

All.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
