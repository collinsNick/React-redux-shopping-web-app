import React, {Component} from 'react';
import {connect} from 'react-redux';
import {confirmOrder} from '../../store/actions/shop';

class Checkout extends Component {

    render() {

         let order = null;

        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">

                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>

                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 order-md-1 ">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation shop-bg-white p-3" novalidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <hr className="mb-4"/>

                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" className="custom-control-input"
                                           checked required/>
                                    <label className="custom-control-label">Credit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" className="custom-control-input"
                                           required/>
                                    <label className="custom-control-label">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" className="custom-control-input"
                                           required/>
                                    <label className="custom-control-label">Paypal</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                           required/>
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <button
                                className="btn shop-btn-secondary btn-lg btn-block"
                                onClick={() => this.props.confirmOrderProps(order)}>
                                Confirm Order
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        productsProps: state.products,
        cartProductsProps: state.products
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        confirmOrderProps: (order) => dispatch(confirmOrder(order,ownProps))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);