import React, {Component} from 'react';
import {connect} from 'react-redux';
import { REMOVE_FROM_CART, CLEAR_CART } from '../../store/actions/shop';

class Cart extends Component {
    render() {

        let cartProduct = null;

        if(this.props.cartProductProp.length){
            cartProduct = <h4>You have products in your cart</h4>
        }else{
            cartProduct = <h5>Your cart is empty. Please fill it up.</h5>
        }

        return (
            <div className={'p-4 shop-cart-div'}>
                {cartProduct}
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


export default connect(mapStateToProps, mapDispatchToProps )(Cart);