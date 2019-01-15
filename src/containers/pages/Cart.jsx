import React, {Component} from 'react';
import {connect} from 'react-redux';
import {REMOVE_FROM_CART, CLEAR_CART} from '../../store/actions/shop';
import photo from '../../assets/shop_images/men/slim-fit-suit.jpg';

class Cart extends Component {
    render() {

        let cartProduct = null;

        if (this.props.cartProductProp.length) {
            cartProduct = <h4>You have products in your cart</h4>
        } else {
            cartProduct = <h5>Your cart is empty. Please fill it up.</h5>
        }

        return (
            <div className={'p-4 shop-cart-div'}>

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className={'shop-cart-image'} src={photo} alt={'some-photo'}/>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="shop-cart-name ">Product name</h5>
                                <h6 lassName="shop-cart-category ">
                                    Product category
                                </h6>
                            </div>
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-6 text-right">
                                        <h6 className={'shop-cart-price'}>Ksh. 25.00</h6>
                                        <input type="text" className="form-control input-sm shop-cart-quantity my-3"/>
                                        <h6 className={'shop-cart-total'}>Item Total <strong>Ksh. 25.00</strong></h6>
                                    </div>
                                    <div className="col-sm-4 offset-sm-2 text-right">
                                        <button type="button" className="btn btn-primary btn-sm">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className={'shop-cart-image'} src={photo} alt={'some-photo'}/>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="shop-cart-name ">Product name</h5>
                                <h6 lassName="shop-cart-category ">
                                    Product category
                                </h6>
                            </div>
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-6 text-right">
                                        <h6 className={'shop-cart-price'}>Ksh. 25.00</h6>
                                        <input type="text" className="form-control input-sm shop-cart-quantity my-3"/>
                                        <h6 className={'shop-cart-total'}>Item Total <strong>Ksh. 25.00</strong></h6>
                                    </div>
                                    <div className="col-sm-4 offset-sm-2 text-right">
                                        <button type="button" className="btn btn-primary btn-sm">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-sm-3 offset-sm-6 text-left">
                        Subtotal
                    </div>
                    <div className="col-sm-3 text-right">
                        Ksh. 3786648
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3 offset-sm-6 text-left">
                        Estimated shipping
                    </div>
                    <div className="col-sm-3 text-right">
                        Ksh. 3786648
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-3 offset-sm-6 text-left">
                        <h4 className={'shop-cart-total'}>Total</h4>
                    </div>
                    <div className="col-sm-3 text-right">
                        <h4 className={'shop-cart-total'}>Ksh. 345566</h4>
                    </div>
                </div>
                 <hr/>
                <div className="row">
                    <div className="col-sm-3 offset-sm-6 text-left">
                        <a className="btn btn-outline-primary" href="#" role="button">Continue shopping</a>
                    </div>
                    <div className="col-sm-3 text-right">
                        <button className="btn btn-primary" type="submit">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartProductProp: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCartProp: (productId) => dispatch({type: REMOVE_FROM_CART, productId: productId}),
        clearProductsFromCartProp: () => dispatch({type: CLEAR_CART})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);