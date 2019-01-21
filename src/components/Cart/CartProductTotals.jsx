import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const cartProductTotals = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-6 col-sm-4  offset-sm-5 text-left shop-cart-amounts">
                    Subtotal
                </div>
                <div className="col-6 col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.subtotal.toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6 col-sm-4 offset-sm-5 text-left shop-cart-amounts">
                    Estimated shipping
                </div>
                <div className="col-6 col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.shippingPrice.toLocaleString()}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-6 col-sm-4 offset-sm-5 text-left">
                    <h4 className={'shop-cart-total'}>Total</h4>
                </div>
                <div className="col-6 col-sm-3 text-right">
                    <h4 className={'shop-cart-total'}>Ksh. {(props.shippingPrice + props.subtotal).toLocaleString()}</h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12 col-lg-8 offset-lg-4 text-right">
                    <button onClick={props.clearCart} className="btn shop-btn-outline">Clear cart</button>
                    <Link to={'/'} className="btn shop-btn-outline">Continue
                        shopping</Link>
                    <Link className="btn btn-lg shop-btn-primary checkout" to={'/checkout'}>
                        Checkout
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};

cartProductTotals.propTypes = {
    subtotal: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number,
    clearCart: PropTypes.func.isRequired,
};

cartProductTotals.defaultProps = {
    shippingPrice: 0,
};

export default cartProductTotals;