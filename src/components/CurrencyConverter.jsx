import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrency} from '../store/actions/shop';
import PropTypes from 'prop-types';

class CurrencyConverter extends Component {

    currencyChangeHandler = (event) => {
        this.props.changeCurrencyProp(event.target.value)
    };

    render() {

        return (
            <div className="form-group">
                {this.props.showLabel ? <label><h5>Convert Currency</h5></label> : null}
                <select className="form-control"
                        value={Object.keys(this.props.usedCurrencyProp)[0]}
                        onChange={this.currencyChangeHandler}>
                    {Object.keys(this.props.exchangeRatesProps.rates).map((rateName, index) => (
                        <option
                            key={index}
                            value={this.props.exchangeRatesProps.rates[index]}>
                            {rateName}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

CurrencyConverter.propType = {
    usedCurrencyProp: PropTypes.object.isRequired,
    exchangeRatesProps: PropTypes.object.isRequired,
    showLabel: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        exchangeRatesProps: state.exchangeRates,
        usedCurrencyProp:state.usedCurrency
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeCurrencyProp: (currencyName) => dispatch(changeCurrency(currencyName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);