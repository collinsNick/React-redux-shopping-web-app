import React, {Component} from 'react';
import {connect} from 'react-redux';
import {confirmOrder, setPromoCode} from '../../store/actions/shop';
import CheckoutCartProduct from '../../components/CheckoutCartProduct';
import Alert from '../../components/UI/Alert/Alert';
import PropTypes from 'prop-types';

class Checkout extends Component {

    state = {
        promoCode: '',
        showAlert: false,
        alertType: '',
        alertMessage: ''
    };

    promoCodeChangeHandler = (event) => {
        this.setState({promoCode: event.target.value})
    };

    setPromoCode = (event) => {
        event.preventDefault();
        // check promo code in state
        let getPromoCode = this.props.promoCodeProp.filter(codeName => (
            codeName.code === this.state.promoCode
        ));

        if (getPromoCode.length > 0) {
            this.props.setPromoCodeProp(getPromoCode[0]);
            this.setState({
                showAlert: true,
                alertType: 'alert-success',
                alertMessage: `The promo code you entered has given you a ${getPromoCode[0].percentage}% discount on the total price.`,
            })
        } else {
            this.setState({
                showAlert: true,
                alertType: 'alert alert-danger',
                alertMessage: 'The Promo code you entered does not have discounts',
            })
        }
    };

    closeAlertHandler = () => {
        this.setState({
            showAlert: !this.state.showAlert,
            alertType: '',
            alertMessage: '',
        })
    };

    render() {

        let order = null;
        let productsPrices = [];

        const cartProducts = this.props.cartProductsProps.map(cartProduct => {
            // fetch product information from source based on id
            let productFromStore = this.props.productsProps.find(product => product.id === cartProduct.id);
            productsPrices.push({
                price: productFromStore.quantity > 0 ? productFromStore.price : 0, count: cartProduct.count
            });
            return (
                <CheckoutCartProduct
                    checkoutProductName={productFromStore.name}
                    checkoutProductCategory={productFromStore.category}
                    checkoutProductPrice={productFromStore.price}
                    checkoutProductImage={productFromStore.img}
                    checkoutCartCount={cartProduct.count}
                />
            )
        });

        let productTotals = productsPrices.reduce((acc, el) => acc + (el.price * el.count), 0);
        let vatPercentage = this.props.vatProps > 0 ? this.props.vatProps / 100 : 0;
        let vat = productTotals > 0 ? (productTotals * vatPercentage) : 0;
        let percentageDiscount = this.props.usedPromoCodeProp ? this.props.usedPromoCodeProp.percentage / 100 : 0;
        let discountAmout = productTotals * percentageDiscount ;
        let shoppingTotal = productTotals > 0 ? ((productTotals + vat + this.props.shippingPriceProp) - discountAmout): 0;

        return (
            <div className="container py-4">

                {this.state.showAlert ? <Alert
                        alertType={this.state.alertType}
                        closeAlert={this.closeAlertHandler}>
                        {this.state.alertMessage}
                    </Alert>
                    : null
                }

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">

                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">{this.props.cartTotalProps}</span>
                        </h4>

                        <ul className="list-group mb-3">
                            {cartProducts}
                            { this.props.usedPromoCodeProp ? <li className="list-group-item d-flex justify-content-between">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small className={'font-weight-bold'}>{this.props.usedPromoCodeProp.code}</small>
                                </div>
                                <span className="text-success">-Ksh {discountAmout.toLocaleString()}</span>
                            </li> : null}
                            <li className="list-group-item ">
                                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                                    Sub Total
                                    <span> Ksh. {Math.round(productTotals).toLocaleString()}</span>
                                </div>
                                <div className={'d-flex justify-content-between py-1 shop-checkout-prices'}>
                                    VAT
                                    <span>Ksh. {Math.round(vat).toLocaleString()}</span>
                                </div>
                                <div className={'d-flex justify-content-between shop-checkout-prices'}>
                                    Shipping amount
                                    <span>Ksh. {Math.round(this.props.shippingPriceProp).toLocaleString()}</span>
                                </div>
                            </li>

                            <li className="list-group-item d-flex justify-content-between shop-checkout-total">
                                <span>Total</span>
                                <span className={'shop-total'}>Ksh. {Math.round(shoppingTotal).toLocaleString()}</span>
                            </li>

                        </ul>

                        {/*promo code form */}
                        <form className="card p-2" onSubmit={this.setPromoCode}>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Promo code"
                                    value={this.state.promoCode}
                                    onChange={(event) => this.promoCodeChangeHandler(event)}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn shop-btn-secondary">
                                        Redeem
                                    </button>
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

Checkout.propTypes = {
    productsProps: PropTypes.array.isRequired,
    cartProductsProps: PropTypes.array.isRequired,
    cartTotalProps: PropTypes.number.isRequired,
    shippingPriceProp: PropTypes.number,
    promoCodeProp: PropTypes.array,
    usedPromoCodeProp: PropTypes.string,
};

Checkout.defaultProps = {
    shippingPriceProp: 0
};

const mapStateToProps = state => {
    return {
        productsProps: state.products,
        cartProductsProps: state.cart,
        cartTotalProps: state.cartTotal,
        vatProps: state.vat,
        shippingPriceProp: state.shippingPrice,
        promoCodeProp: state.promoCode,
        usedPromoCodeProp: state.usedPromoCode
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        confirmOrderProp: (order) => dispatch(confirmOrder(order, ownProps)),
        setPromoCodeProp: (promoCode, percentage) => dispatch(setPromoCode(promoCode, percentage)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);