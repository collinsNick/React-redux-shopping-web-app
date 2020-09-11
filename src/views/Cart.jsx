import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  updateCartProductCount,
} from "../store/actions";
import CartProduct from "../components/Cart/CartProducts";
import CartProductTotals from "../components/Cart/CartProductTotals";
import OrderSuccess from "../components/OrderSuccess";
import PropTypes from "prop-types";
import { currencyToUse } from "../Utility/currency";

const Cart = (props) => {
  const productCountHandler = (field_value, product_details) => {
    props.updateCartProductCountProp(field_value, product_details);
  };

  let cartContent = null;
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyValue = currencyKeys.value;

  if (props.cartTotalProp > 0) {
    let cartPriceCountArray = [];
    let cartProducts = props.cartProductsProp.map((productInCart, index) => {
      // fetch product information from source based on id
      // product information can also be stored in state
      let productFromStore = props.productProps.find(
        (product) => product.id === productInCart.id
      );
      cartPriceCountArray.push({
        price:
          productFromStore.quantity > 0
            ? Math.round(productFromStore.price * currencyValue)
            : 0,
        count: productInCart.quantity,
      });
      return (
        <CartProduct
          key={index}
          productId={productFromStore.id}
          productName={productFromStore.name}
          productVendor={productFromStore.vendor}
          productCategory={productFromStore.category}
          productPhoto={productFromStore.img}
          productPrice={Math.round(productFromStore.price * currencyValue)}
          productCount={productInCart.quantity}
          productSize={productInCart.size}
          productQuantity={productFromStore.quantity}
          updateProductCount={(event) =>
            productCountHandler(event.target.value, productInCart)
          }
          removeCartProduct={() =>
            props.removeProductFromCartProp(productInCart)
          }
          currency={props.usedCurrencyProp}
        />
      );
    });

    let cartTotals = (
      <CartProductTotals
        subtotal={cartPriceCountArray.reduce(
          (acc, el) => acc + el.price * el.count,
          0
        )}
        vat={props.vatProp}
        clearCart={() => props.clearProductsFromCartProp()}
        currency={props.usedCurrencyProp}
      />
    );

    cartContent = (
      <React.Fragment>
        {cartProducts}
        {cartTotals}
      </React.Fragment>
    );
  } else if (props.cartTotalProp === 0 && props.orderSuccessProp) {
    cartContent = <OrderSuccess />;
  } else {
    cartContent = (
      <h5 className={"shop-empty-cart"}>
        Your cart is empty. <Link to={"/all"}>Please fill it up.</Link>
      </h5>
    );
  }

  return (
    <div className="container shop-container py-4">
      <div className={"p-4 shop-div"}>{cartContent}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productProps: state.products,
    cartTotalProp: state.cartTotal,
    cartProductsProp: state.cart,
    vatProp: state.vat,
    orderSuccessProp: state.orderSuccess,
    usedCurrencyProp: state.usedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCartProp: (productDetails) =>
      dispatch(removeFromCart(productDetails)),
    clearProductsFromCartProp: () => dispatch(clearCart()),
    updateCartProductCountProp: (value, productDetails) =>
      dispatch(updateCartProductCount(Number(value), productDetails)),
  };
};

Cart.propTypes = {
  cartTotalProp: PropTypes.number.isRequired,
  cartProductsProp: PropTypes.array.isRequired,
  productProps: PropTypes.array.isRequired,
  orderSuccessProp: PropTypes.bool.isRequired,
  vatProp: PropTypes.number,
  usedCurrencyProp: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
