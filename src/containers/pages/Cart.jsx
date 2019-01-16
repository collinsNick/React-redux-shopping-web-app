import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionTypes from '../../store/actions/shop';
import photo from '../../assets/shop_images/men/slim-fit-suit.jpg';
import CartProduct from '../../components/Cart/CartProducts'
import CartProductTotals from '../../components/Cart/CartProductTotals'

class Cart extends Component {

    productCountHandler = (event, product_in_cart_id) => {
        this.props.updateCartProductCountProp(event.target.value, product_in_cart_id)
    }

    render() {

        let cartContent = <h5>Your cart is empty. <Link to={'/'}>Please fill it up.</Link></h5>;

        if (this.props.cartTotalProp > 0) {
            let cartProducts = this.props.cartProductsProp
                .map(productInCart => {
                    // fetch product information from source based on id
                    let productFromState = this.props.productProps.find(product => product.id === productInCart.id)
                    return (
                        <CartProduct
                            key={productInCart.id}
                            productName={productFromState.name}
                            productCategory={productFromState.category}
                            productPhoto={productFromState.img}
                            productPrice={productFromState.price}
                            productCount={productInCart.count}
                            updateProductCount={(event) => this.productCountHandler(event, productInCart.id)}
                            removeCartProduct={() => this.props.removeProductFromCartProp(productInCart.id, productInCart.count)}
                        />
                    )
                })

            let cartTotals = <CartProductTotals
                shippingPrice={this.props.shippingPriceProp}
                clearCart={() => this.props.clearProductsFromCartProp()}/>

            cartContent = (
                <React.Fragment>
                    {cartProducts}
                    {cartTotals}
                </React.Fragment>
            )
        }

        return (
            <div className={'p-4 shop-cart-div'}>
                {cartContent}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productProps: state.products,
        cartTotalProp: state.cartTotal,
        cartProductsProp: state.cart,
        shippingPriceProp: state.shippingPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCartProp: (productId, count) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            productId: productId,
            productCount: count
        }),

        clearProductsFromCartProp: () => dispatch({type: actionTypes.CLEAR_CART}),

        updateCartProductCountProp: (value, productId) => dispatch({
            type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
            newCountValue: productId,
            productId: productId
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);