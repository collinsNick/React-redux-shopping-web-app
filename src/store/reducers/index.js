import * as actionTypes from "../actions/actionTypes";
import Data from "../../static/data";

const initialState = Data;

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_PRICE_FILTER:
      let productPriceFilter = state.priceFilter;
      productPriceFilter = {
        ...productPriceFilter,
        pricerange: parseInt(action.price),
      };
      return {
        ...state,
        priceFilter: productPriceFilter,
      };
    case actionTypes.ADD_TO_CART:
      let newCart = [...state.cart];
      let newCartTotal = state.cartTotal;
      let productMaxShowModal = state.productMaxShowModal;
      let modalMessage = null;

      let toAddProduct = action.productDetails;
      let cart = state.cart;

      var filteredCartItems = cart.filter(
        (product) => product.id === toAddProduct.id
      );

      let quantityToAdd = parseInt(toAddProduct.quantity);
      if (filteredCartItems.length) {
        if (toAddProduct.size) {
          let prodIndex = cart.findIndex(
            (product) =>
              product.id === toAddProduct.id &&
              product.size === toAddProduct.size
          );
          if (prodIndex > -1) {
            let itemToModify = newCart[prodIndex];
            newCart[prodIndex] = {
              ...itemToModify,
              quantity: parseInt(itemToModify.quantity) + quantityToAdd,
            };
          } else {
            newCart = cart.concat(toAddProduct);
          }
        } else {
          let prodIndex = cart.findIndex(
            (product) => product.id === toAddProduct.id
          );
          let itemToModify = newCart[prodIndex];
          newCart[prodIndex] = {
            ...itemToModify,
            quantity: parseInt(itemToModify.quantity) + quantityToAdd,
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
      let toRemoveProduct = action.productDetails;
      let removeIndex = null;
      let cartToRemove = [...state.cart];

      if (toRemoveProduct.size) {
        removeIndex = cartToRemove.findIndex(
          (product) =>
            product.id === toRemoveProduct.id &&
            product.size === toRemoveProduct.size
        );
      } else {
        removeIndex = cartToRemove.findIndex(
          (product) => product.id === toRemoveProduct.id
        );
      }

      cartToRemove.splice(removeIndex, 1);

      return {
        ...state,
        cart: cartToRemove,
        cartTotal: state.cartTotal - toRemoveProduct.quantity,
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartTotal: 0,
        cart: [],
      };

    case actionTypes.UPDATE_CART_PRODUCT_COUNT:
      let cartToUpdate = [...state.cart];
      let prodToUpdate = action.productDetails;
      let updateIndex = null;
      if (prodToUpdate.size) {
        updateIndex = state.cart.findIndex(
          (product) =>
            product.id === prodToUpdate.id && product.size === prodToUpdate.size
        );
      } else {
        updateIndex = state.cart.findIndex(
          (product) => product.id === prodToUpdate.id
        );
      }

      let cartTotal = state.cartTotal;
      if (updateIndex > -1) {
        let itemToModify = cartToUpdate[updateIndex];
        cartToUpdate[updateIndex] = {
          ...itemToModify,
          quantity: parseInt(action.newCountValue),
        };
        cartTotal -= itemToModify.quantity - action.newCountValue;
      }

      return {
        ...state,
        cart: cartToUpdate,
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

export default appReducer;
