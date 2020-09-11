import * as actionTypes from "./actionTypes";

export const setProductPriceFilter = (price) => {
  return { type: actionTypes.SET_PRODUCT_PRICE_FILTER, price: price };
};

export const addToCart = (productDetails) => {
  return {
    type: actionTypes.ADD_TO_CART,
    productDetails: productDetails,
  };
};

export const removeFromCart = (productDetails) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productDetails: productDetails,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};

export const updateCartProductCount = (value, productDetails) => {
  return {
    type: actionTypes.UPDATE_CART_PRODUCT_COUNT,
    newCountValue: value,
    productDetails: productDetails,
  };
};

export const confirmOrder = (order, ownProps) => {
  return (dispatch) => {
    // send order object to an end point of choice
    console.log(order);
    // todo
    //token to be used with stripe
    dispatch(confirmOrderSuccess());
    ownProps.history.push("/cart");
    setTimeout(() => {
      dispatch(resetOrderSuccess());
    }, 5000);
  };
};

export const closeMaxProductModal = () => {
  return {
    type: actionTypes.CLOSE_MAX_PRODUCT_MODAL,
  };
};

export const confirmOrderSuccess = () => {
  return {
    type: actionTypes.CONFIRM_ORDER_SUCCESS,
  };
};

export const resetOrderSuccess = () => {
  return {
    type: actionTypes.RESET_ORDER_SUCCESS,
  };
};

export const confirmOrderFailure = () => {
  // todo
  return {
    type: actionTypes.CONFIRM_ORDER_FAILURE,
  };
};

export const toogleSideBar = () => {
  return {
    type: actionTypes.TOGGLE_SIDE_BAR,
  };
};

export const setPromoCode = (promoCodeObject) => {
  return {
    type: actionTypes.SET_PROMO_CODE,
    promoCode: promoCodeObject,
  };
};

export const changeCurrency = (currencyName) => {
  // currency value can be fetched here from an external api and then passes to the store
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currencyName: currencyName,
  };
};

export const toogleItemInWishList = (productId) => {
  return {
    type: actionTypes.TOOLE_ITEM_IN_WISHLIST,
    productId: productId,
  };
};
