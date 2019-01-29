import React from 'react';
import PropTypes from 'prop-types';

const checkoutCartTotals = (props) => {

     let currencyName = Object.keys(props.currency);
    let currencyValue = props.currency[currencyName];

    return (
        <React.Fragment>
            <li className="list-group-item ">
                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                    Sub Total
                    <span> <span style={{textTransform:'lowercase'}}>{currencyName} </span> {Math.round(props.productTotals * currencyValue).toLocaleString()}</span>
                </div>
                <div className={'d-flex justify-content-between py-1 shop-checkout-prices'}>
                    VAT
                    <span><span style={{textTransform:'lowercase'}}>{currencyName} </span> {Math.round(props.vat * currencyValue).toLocaleString()}</span>
                </div>
                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                    Shipping amount
                    <span><span style={{textTransform:'lowercase'}}>{currencyName} </span> {Math.round(props.shippingPrice * currencyValue).toLocaleString()}</span>
                </div>
            </li>

            <li className="list-group-item d-flex justify-content-between shop-checkout-total">
                <span>Total</span>
                <span className={'shop-total'}><span style={{textTransform:'capitalize'}}>{currencyName}</span> {Math.round(props.shoppingTotal * currencyValue).toLocaleString()}</span>
            </li>
        </React.Fragment>
    )
};

checkoutCartTotals.propTypes = {
    productTotals: PropTypes.number.isRequired,
    vat: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    shoppingTotal: PropTypes.number.isRequired,
    currency: PropTypes.object.isRequired
};

export default checkoutCartTotals;
