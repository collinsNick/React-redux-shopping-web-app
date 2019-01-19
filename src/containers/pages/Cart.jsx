import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeFromCart, clearCart, updateCartProductCount} from '../../store/actions/shop';
import CartProduct from '../../components/Cart/CartProducts';
import CartProductTotals from '../../components/Cart/CartProductTotals';
import PropTypes from 'prop-types';

class Cart extends Component {

    state = {
        cartProductCountsState: this.props.cartProductsProp.keys()
    }

    productCountHandler = (field_value, product_in_cart_id) => {
        this.props.updateCartProductCountProp(field_value, product_in_cart_id)
    }

    render() {

        let cartContent = <h5>Your cart is empty. <Link to={'/'}>Please fill it up.</Link></h5>;

        if (this.props.cartTotalProp > 0) {
            console.log(this.props.cartProductsProp)
            let cartPriceCountArray = [];
            let cartProducts = this.props.cartProductsProp
                .map((productInCart) => {
                    // fetch product information from source based on id
                    // product information can also be stored in state
                    let productFromStore = this.props.productProps.find(product => product.id === productInCart.id);
                    cartPriceCountArray.push({
                            price: productFromStore.quantity > 0 ? productFromStore.price : 0, count: productInCart.count
                        }
                    )
                    return (
                        <CartProduct
                            key={productInCart.id}
                            productName={productFromStore.name}
                            productCategory={productFromStore.category}
                            productPhoto={productFromStore.img}
                            productPrice={productFromStore.price}
                            productCount={productInCart.count}
                            productQuantity={productFromStore.quantity}
                            updateProductCount={(event) => this.productCountHandler(event.target.value, productInCart.id)}
                            removeCartProduct={() => this.props.removeProductFromCartProp(productInCart.id, productInCart.count)}
                        />
                    )
                })

            let cartTotals = <CartProductTotals
                shippingPrice={this.props.shippingPriceProp}
                subtotal={cartPriceCountArray.reduce((acc, el) => acc + (el.price * el.count), 0)}
                clearCart={() => this.props.clearProductsFromCartProp()}
            />

            cartContent = (
                <React.Fragment>
                    {cartProducts}
                    {cartTotals}
                </React.Fragment>
            )
        }

        return (
            <div className={'p-4 shop-div'}>
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
        removeProductFromCartProp: (productId, count) => dispatch(removeFromCart(productId, count)),
        clearProductsFromCartProp: () => dispatch(clearCart()),
        updateCartProductCountProp: (value, productId) => dispatch(updateCartProductCount(value, productId))
    }
};

Cart.propTypes = {
    cartTotalProp: PropTypes.number.isRequired,
    shippingPriceProp: PropTypes.number.isRequired,
    cartProductsProp: PropTypes.array.isRequired,
    productProps: PropTypes.array.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);