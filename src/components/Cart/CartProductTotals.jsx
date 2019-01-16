import React from 'react';
import { Link } from 'react-router-dom';

const cartProductTotals = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left shop-cart-amounts">
                    Subtotal
                </div>
                <div className="col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.subtotal}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left shop-cart-amounts">
                    Estimated shipping
                </div>
                <div className="col-sm-3 text-right shop-cart-amounts">
                    Ksh. {props.shippingPrice}
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-3 offset-sm-6 text-left">
                    <h4 className={'shop-cart-total'}>Total</h4>
                </div>
                <div className="col-sm-3 text-right">
                    <h4 className={'shop-cart-total'}>Ksh. {props.totalPrice}</h4>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-8 offset-sm-4 text-right">
                    <button onClick={props.clearCart} className="btn btn btn-outline-secondary mr-4">Clear cart</button>
                    <Link to={'/'} className="btn btn btn-outline-secondary mr-4" href="#" role="button">Continue shopping</Link>
                    <button className="btn btn-secondary" type="submit">Checkout</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default cartProductTotals;