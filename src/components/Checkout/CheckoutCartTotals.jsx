import React from 'react';
import PropTypes from 'prop-types';

const checkoutCartTotals = (props) => {
    return (
        <React.Fragment>
            <li className="list-group-item ">
                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                    Sub Total
                    <span> Ksh. {Math.round(props.productTotals).toLocaleString()}</span>
                </div>
                <div className={'d-flex justify-content-between py-1 shop-checkout-prices'}>
                    VAT
                    <span>Ksh. {Math.round(props.vat).toLocaleString()}</span>
                </div>
                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                    Shipping amount
                    <span>Ksh. {Math.round(props.shippingPrice).toLocaleString()}</span>
                </div>
            </li>

            <li className="list-group-item d-flex justify-content-between shop-checkout-total">
                <span>Total</span>
                <span className={'shop-total'}>Ksh. {Math.round(props.shoppingTotal).toLocaleString()}</span>
            </li>
        </React.Fragment>
    )
};

checkoutCartTotals.propTypes = {
    productTotals: PropTypes.number.isRequired,
    vat: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    shoppingTotal: PropTypes.number.isRequired
};

export default checkoutCartTotals;
