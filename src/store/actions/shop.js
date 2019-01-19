import * as actionTypes from './actionTypes';
import { createBrowserHistory } from 'history/createHashHistory';

export const addToCart = (productId, productQuantity) => {
    return {
        type: actionTypes.ADD_TO_CART,
        productId: productId,
        productQuantity: productQuantity
    }
};

export const removeFromCart = (productId, count) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        productId: productId,
        productCount: count
    }
};

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
};

export const updateCartProductCount = (value, productId) => {
    return {
        type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
        newCountValue: value,
        productId: productId,
    }
};

export const checkout = (ownProps) => {
    return dispatch => {
        dispatch(shoppingCheckout());
        ownProps.history.push('/checkout')
    }
};

export const closeMaxProductModal = () => {
    return {
        type: actionTypes.CLOSE_MAX_PRODUCT_MODAL
    }
};

export const shoppingCheckout = () => {
    return {
        type: actionTypes.CHECKOUT
    }
};

export const redirectAfterCheckout = (ownProps) => {
};