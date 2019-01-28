import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {confirmOrder, setPromoCode} from '../../store/actions/shop';
import CheckoutCartProduct from '../../components/Checkout/CheckoutCartProduct';
import PromoCodeForm from '../../components/Checkout/PromoCodeForm';
import PromoCodeValue from '../../components/Checkout/PromoCodeValue';
import CheckoutCartTotals from '../../components/Checkout/CheckoutCartTotals';
import CustomerInputs from '../../components/Checkout/Forms/CustomerInputs';
import PaymentOptions from '../../components/Checkout/Forms/Payments/PaymentOptions';
import Alert from '../../components/UI/Alert/Alert';
import PropTypes from 'prop-types';
import formValidator from '../../Utility/formValidation';
import {CardElement, injectStripe} from 'react-stripe-elements';

class Checkout extends Component {

    state = {
        promoCode: '',
        showAlert: false,
        alertType: '',
        alertMessage: '',
        paymentMethod: "creditCard",
        customerInfo: {
            firstName: {
                value: '',
                valid: false,
                touched: false,
            },

            secondName: {
                value: '',
                valid: false,
                touched: false,
            },

            email: {
                value: '',
                valid: false,
                touched: false,
            }
        },
    };

    customerInfoChangeHandler = (event, identifier) => {
        // use deep cloning to be able to get the values of nested objects
        const customerInfo = {...this.state.customerInfo};
        const customerInfoField = {...customerInfo[identifier]};
        customerInfoField.value = event.target.value;
        customerInfo[identifier] = customerInfoField;
        this.setState({customerInfo: customerInfo});
    };

    promoCodeChangeHandler = (event) => {
        this.setState({promoCode: event.target.value})
    };

    paymentOptionChangeHandler = (event) => {
        console.log(event.target.value);
        this.setState({paymentMethod: event.target.value})
    };

    confirmOrderHandler = (event, order) => {
        event.preventDefault();
        alert(' you have ordered');
        // this.props.confirmOrderProp(order)
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
        let chosenPaymentMethod = null;

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

        let shippingPrice = this.props.shippingPriceProp ? this.props.shippingPriceProp : 0;
        let productTotals = productsPrices.reduce((acc, el) => acc + (el.price * el.count), 0);
        let vatPercentage = this.props.vatProps > 0 ? this.props.vatProps / 100 : 0;
        let vat = productTotals > 0 ? (productTotals * vatPercentage) : 0;
        let percentageDiscount = this.props.usedPromoCodeProp ? this.props.usedPromoCodeProp.percentage / 100 : 0;
        let discountAmount = productTotals * percentageDiscount;
        let shoppingTotal = productTotals > 0 ? ((productTotals + vat + shippingPrice) - discountAmount) : 0;

        if (this.state.paymentMethod === "creditCard") {
            chosenPaymentMethod =
                <div className={'w-75 ml-4 p-3 shop-card-field'}><CardElement /></div>
        } else if (this.state.paymentMethod === "mobileMoney") {
            chosenPaymentMethod =
                <div className={'w-75 ml-4 p-3'}>Mpesa, Airtel Money, Equitel</div>
        }

        return (

            <div className="container py-4">

                { this.props.cartTotalProps <= 0 ? <Redirect to="/" /> : null }

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
                            <span className="text-muted">Order Review</span>
                            <span className="badge badge-secondary badge-pill">{this.props.cartTotalProps}</span>
                        </h4>

                        <ul className="list-group mb-3">

                            {/* items in cart */}
                            {cartProducts}

                            {/* used promo codes */}
                            {this.props.usedPromoCodeProp ?
                                <PromoCodeValue
                                    usedPromoCode={this.props.usedPromoCodeProp}
                                    discountAmount={discountAmount}/> : null}

                            {/* checkout totals */}
                            <CheckoutCartTotals
                                productTotals={productTotals}
                                vat={vat}
                                shippingPrice={shippingPrice}
                                shoppingTotal={shoppingTotal}/>
                        </ul>

                        {/*promo code form */}
                        <PromoCodeForm
                            setPromoCode={this.setPromoCode}
                            promoCodeChangeHandler={(event) => this.promoCodeChangeHandler(event)}
                            promoCode={this.state.promoCode}
                        />

                    </div>
                    <div className="col-md-8 order-md-1 ">
                        <h4 className="mb-3">Billing Information</h4>
                        <form className="shop-form shop-bg-white p-3" noValidate>
                            {/* customer details form fields */}
                            <CustomerInputs
                                customerInfo={this.state.customerInfo}
                                inputChanged={(event, identifier) => this.customerInfoChangeHandler(event, identifier)}/>
                            <h4 className="mb-3">Payment Method</h4>
                            {/* payment option selection field */}
                            <PaymentOptions
                                paymentMethod={this.state.paymentMethod}
                                paymentOptionChanged={this.paymentOptionChangeHandler}/>
                            {/* payment section */}
                            <div>
                                {chosenPaymentMethod}
                            </div>

                            <hr className="mb-4"/>
                            <button
                                className="btn shop-btn-secondary btn-lg btn-block"
                                onClick={(event) => this.confirmOrderHandler(event, order)}>
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
    usedPromoCodeProp: PropTypes.object,
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

// inject stripe prop into the component
export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(Checkout));