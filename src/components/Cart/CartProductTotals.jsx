import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const cartProductTotals = (props) => {

    let currencyName = Object.keys(props.currency);
    let currencyValue = props.currency[currencyName];

    let subtotal = props.subtotal;
    let vatPercentage = props.vat > 0 ? props.vat/100 : 0;
    let vat = subtotal > 0 ? (subtotal * vatPercentage) : 0;
    let totalCost = subtotal > 0 ? (Math.round(subtotal * currencyValue) + Math.round(vat * currencyValue)) : 0;

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-6 col-sm-4  offset-sm-5 text-left shop-cart-amounts">
                    Subtotal
                </div>
                <div className="col-6 col-sm-3 text-right shop-cart-amounts">
                    <span style={{textTransform:'lowercase'}}>{currencyName} </span> {Math.round(subtotal * currencyValue).toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6 col-sm-4 offset-sm-5 text-left shop-cart-amounts">
                    VAT
                </div>
                <div className="col-6 col-sm-3 text-right shop-cart-amounts">
                    <span style={{textTransform:'lowercase'}}>{currencyName} </span> {Math.round(vat * currencyValue).toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6 col-sm-4 offset-sm-5 text-left">
                    <h4 className={'shop-cart-total'}>Total</h4>
                </div>
                <div className="col-6 col-sm-3 text-right">
                    <h4 className={'shop-cart-total'}>
                       <span style={{textTransform:'capitalize'}}>{currencyName} </span> {totalCost.toLocaleString()}
                    </h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12 col-lg-8 offset-lg-4 text-right">
                    <button onClick={props.clearCart} className="btn shop-btn-outline">Clear cart</button>
                    <Link to={'/'} className="btn shop-btn-outline">Continue
                        shopping</Link>
                    <Link className="btn btn-lg shop-btn-secondary checkout" to={'/checkout'}>
                        Checkout
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

cartProductTotals.propTypes = {
    subtotal: PropTypes.number.isRequired,
    clearCart: PropTypes.func.isRequired,
    vat: PropTypes.number,
    currency: PropTypes.object.isRequired
};

cartProductTotals.defaultProps = {
    shippingPrice: 0,
};

export default cartProductTotals;