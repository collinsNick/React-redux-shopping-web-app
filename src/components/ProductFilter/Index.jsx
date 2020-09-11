import React from "react";
import { connect } from "react-redux";
import { getUsedCurrency } from "../../store/selectors";
import { currencyToUse, productPrice } from "../../Utility/currency";
import { setProductPriceFilter } from "../../store/actions/index";
import { getProductPriceFilter } from "../../store/selectors";
import "./index.css";

const Index = (props) => {
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyValue = currencyKeys.value;
  let currencyName = currencyKeys.name;
  let { min, max, pricerange } = props.productPricefilter;
  const rangeChanged = (event) => {
    props.updateProductFilterPrice(event.target.value);
  };

  return (
    <div className={"container shop-left-column price-filter mt-2 py-2"}>
      <h5>Filter by Price</h5>
      <div>
        {`Max Price : `}
        <span>
          {currencyName}
          {productPrice(pricerange, currencyValue)}
        </span>
      </div>
      <input
        className="slider"
        id="pricerange"
        type="range"
        value={pricerange}
        onChange={rangeChanged}
        min={min}
        max={max}
        step="1"
      />
      <div className="price-ranges">
        <span>
          {currencyName}
          {productPrice(min, currencyValue)}
        </span>
        <span>
          {currencyName}
          {productPrice(max, currencyValue)}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usedCurrencyProp: getUsedCurrency(state),
    productPricefilter: getProductPriceFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProductFilterPrice: (filterPrice) =>
      dispatch(setProductPriceFilter(filterPrice)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
