import * as actionTypes from "../actions/actionTypes";
import Data from "../data";

const initialState = Data;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let newCart = [...state.cart];
      let newCartTotal = state.cartTotal;
      let productMaxShowModal = state.productMaxShowModal;
      let modalMessage = null;

      let toAddProduct = action.productDetails;
      let cart = state.cart;

      var filteredCartItems = cart.filter(
        (product) => product.product_id === toAddProduct.product_id
      );

      let quantityToAdd = parseInt(toAddProduct.product_quantity);
      if (filteredCartItems.length) {
        if (toAddProduct.product_size) {
          let prodIndex = cart.findIndex(
            (product) =>
              product.product_id === toAddProduct.product_id &&
              product.product_size === toAddProduct.product_size
          );
          if (prodIndex > -1) {
            let itemToModify = newCart[prodIndex];
            newCart[prodIndex] = {
              ...itemToModify,
              product_quantity:
                parseInt(itemToModify.product_quantity) + quantityToAdd,
            };
          } else {
            newCart = cart.concat(toAddProduct);
          }
        } else {
          let prodIndex = cart.findIndex(
            (product) => product.product_id === toAddProduct.product_id
          );
          let itemToModify = newCart[prodIndex];
          newCart[prodIndex] = {
            ...itemToModify,
            product_quantity:
              parseInt(itemToModify.product_quantity) + quantityToAdd,
          };
        }
        newCartTotal = state.cartTotal + quantityToAdd;
      } else {
        newCart = cart.concat(toAddProduct);
        newCartTotal = state.cartTotal + quantityToAdd;
      }

      return {
        ...state,
        cartTotal: newCartTotal,
        cart: newCart,
        productMaxShowModal: productMaxShowModal,
        modalMessage: modalMessage,
      };

    case actionTypes.REMOVE_FROM_CART:
      newCart = state.cart.filter((product) => product.id !== action.productId);
      return {
        ...state,
        cart: newCart,
        cartTotal: state.cartTotal - action.productCount,
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartTotal: 0,
        cart: [],
      };

    case actionTypes.UPDATE_CART_PRODUCT_COUNT:
      let product = state.cart.find(
        (product) => product.id === action.productId
      );
      let cartTotal = state.cartTotal;
      newCart = state.cart;
      if (product) {
        cartTotal = state.cartTotal - (product.count - action.newCountValue);
        newCart = state.cart.map((product) =>
          product.id === action.productId
            ? { ...product, count: action.newCountValue }
            : product
        );
      }

      return {
        ...state,
        cart: newCart,
        cartTotal: cartTotal,
      };

    case actionTypes.CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        cart: [],
        cartTotal: 0,
        orderSuccess: true,
      };

    case actionTypes.RESET_ORDER_SUCCESS:
      return {
        ...state,
        orderSuccess: false,
      };

    case actionTypes.CONFIRM_ORDER_FAILURE:
      return {
        ...state,
      };

    case actionTypes.CLOSE_MAX_PRODUCT_MODAL:
      return {
        ...state,
        productMaxShowModal: !state.productMaxShowModal,
      };

    case actionTypes.TOGGLE_SIDE_BAR:
      return {
        ...state,
        showSideNavigation: !state.showSideNavigation,
      };

    case actionTypes.SET_PROMO_CODE:
      return {
        ...state,
        usedPromoCode: action.promoCode,
      };

    case actionTypes.CHANGE_CURRENCY: {
      let currencyName = null;
      let currencyValue = null;
      let currencyObj = {};

      let currencyNameSearch = Object.keys(state.exchangeRates.rates).filter(
        (rate) => action.currencyName === rate
      );
      if (currencyNameSearch) {
        currencyName = action.currencyName;
        currencyValue = state.exchangeRates.rates[currencyName];

        currencyObj[currencyName] = currencyValue;
        currencyObj["symbol"] = state.currencySymbols[currencyName];
      }

      return {
        ...state,
        // just in case the currency is not found
        usedCurrency: currencyNameSearch
          ? currencyObj
          : this.state.usedCurrency,
      };
    }

    case actionTypes.TOOLE_ITEM_IN_WISHLIST:
      let wisList = state.wishlist;
      let chkProductInWishList = state.wishlist.find(
        (id) => id === action.productId
      );
      if (chkProductInWishList) {
        // remove from wish list
        wisList = state.wishlist.filter((id) => id !== action.productId);
      } else {
        // addd to wish list
        wisList = state.wishlist.concat(action.productId);
      }

      return {
        ...state,
        wishlist: wisList,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
