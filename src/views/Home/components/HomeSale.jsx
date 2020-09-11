import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { currencyToUse } from "../../../Utility/currency";
import { VISIBILITY_FILTERS } from "../../../static/constants";
import { getProductsByFilter } from "../../../store/selectors";

const HomeSale = (props) => {
  let currencyKeys = currencyToUse(props.usedCurrencyProp);

  let products = props.productsProps.map((product, index) => {
    return (
      <div className="card card-body shadow" key={index}>
        <img
          className="card-img-top"
          src={require(`../../../assets/images/shop_images/${product.img}`)}
          alt="product"
        />
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {currencyKeys.name}
          {Math.round(product.price * currencyKeys.value).toLocaleString()}
        </p>
        <NavLink
          className="btn btn-primary btn-sm"
          to={`/product/${product.slug}`}
          exact
        >
          View Item
        </NavLink>
      </div>
    );
  });
  return (
    <div className="container products-section mb-4">
      <div className="products-section-title pb-3">
        <h4>ON SALE</h4>
        <NavLink
          className="btn btn-link products-section-link"
          to="/sale"
          exact
        >
          See All
        </NavLink>
      </div>
      <div className="products-container">{products}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsProps: getProductsByFilter(state, VISIBILITY_FILTERS.SALE, 6),
    usedCurrencyProp: state.usedCurrency,
  };
};

export default connect(mapStateToProps)(HomeSale);
