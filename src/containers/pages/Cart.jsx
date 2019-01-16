import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {REMOVE_FROM_CART, CLEAR_CART} from '../../store/actions/shop';
import photo from '../../assets/shop_images/men/slim-fit-suit.jpg';
import CartProduct from '../../components/Cart/CartProducts'
import CartProductTotals from '../../components/Cart/CartProductTotals'

class Cart extends Component {
    render() {

        let cartContent = <h5>Your cart is empty. <Link to={'/'}>Please fill it up.</Link></h5>;

        if (this.props.cartTotalProp > 0) {
            let cartProducts = this.props.cartProductsProp
                .map(productInCart => {
                    let productFromState = this.props.productProps.find(product => product.id === productInCart.id)
                    return (
                        <CartProduct
                            key={productInCart.id}
                            productName={productFromState.name}
                            productCategory={productFromState.category}
                            productPhoto={productFromState.img}
                            productPrice={productFromState.price}
                            productCount={productInCart.count}
                        />
                    )
                })

            let cartTotals = <CartProductTotals/>

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
        cartProductsProp: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCartProp: (productId) => dispatch({type: REMOVE_FROM_CART, productId: productId}),
        clearProductsFromCartProp: () => dispatch({type: CLEAR_CART})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);