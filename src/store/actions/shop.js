import * as actionTypes from './actionTypes';

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

export const confirmOrder = (order, ownProps) => {
    return dispatch => {
        // place holder
        if(order){
            dispatch(confirmOrderSuccess());
        }else{
           dispatch(confirmOrderFailure());
        }
        ownProps.history.push('/checkout')
    }
};

export const closeMaxProductModal = () => {
    return {
        type: actionTypes.CLOSE_MAX_PRODUCT_MODAL
    }
};

export const confirmOrderSuccess = () => {
    return {
        type: actionTypes.CONFIRM_ORDER_SUCCESS
    }
};

export const confirmOrderFailure = () => {
    return {
        type: actionTypes.CONFIRM_ORDER_FAILURE
    }
};

export const toogleSideBar = () => {
    return{
        type:actionTypes.TOGGLE_SIDE_BAR
    }
};

export const propCodeSuccess = () => {
    return{
        type: actionTypes.PROMO_CODE_SUCCESS
    }
};

export const propCodeFailure = () => {
    return{
        type: actionTypes.PROMO_CODE_FAILURE
    }
};