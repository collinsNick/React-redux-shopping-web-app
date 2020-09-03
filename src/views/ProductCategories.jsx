import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductCard from "../components/ProductCard/Index";
import SecondaryLayout from "../Layouts/SecondaryLayout";
import EmptyCategoryPageContent from "../components/EmptyCategoryPageContent";

class ProductCategories extends Component {
  render() {
    let productsCount = this.props.productsProps.length;
    let products = <EmptyCategoryPageContent />;
    const {
      match: { params },
    } = this.props;

    if (productsCount > 0) {
      products = this.props.productsProps.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            currency={this.props.usedCurrencyProp}
          />
        );
      });
    }
    return (
      <SecondaryLayout
        results={`(${productsCount} products found)`}
        breadCrumbs={[
          {
            label: params.category,
            to: "/category/" + params.category,
          },
        ]}
      >
        {products}
      </SecondaryLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productsProps: state.products.filter(
      (product) => product.category === ownProps.match.params.category
    ),
    usedCurrencyProp: state.usedCurrency,
  };
};

ProductCategories.propTypes = {
  productsProps: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ProductCategories);
