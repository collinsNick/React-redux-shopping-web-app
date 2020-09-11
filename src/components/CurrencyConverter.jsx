import React from "react";
import { connect } from "react-redux";
import { changeCurrency } from "../store/actions";
import PropTypes from "prop-types";

const CurrencyConverter = (props) => {
  const currencyChangeHandler = (event) => {
    props.changeCurrencyProp(event.target.value);
  };

  return (
    <div className="form-group">
      {props.showLabel ? (
        <label>
          <h5>Convert Currency</h5>
        </label>
      ) : null}
      <select
        className="form-control"
        value={Object.keys(props.usedCurrencyProp)[0]}
        onChange={currencyChangeHandler}
      >
        {Object.keys(props.exchangeRatesProps.rates).map((rateName, index) => (
          <option key={index} value={props.exchangeRatesProps.rates[index]}>
            {rateName}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyConverter.propType = {
  usedCurrencyProp: PropTypes.object.isRequired,
  exchangeRatesProps: PropTypes.object.isRequired,
  showLabel: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    exchangeRatesProps: state.exchangeRates,
    usedCurrencyProp: state.usedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrencyProp: (currencyName) =>
      dispatch(changeCurrency(currencyName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);
