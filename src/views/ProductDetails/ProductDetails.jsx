import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/shop";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Ratings from "../../components/Ratings/Ratings";
import AddToWishList from "../../components/AddToWishlist/AddToWishlist";
import ProductFeatures from "../../components/ProductCard/ProductFeatures";
import {
  currencyToUse,
  productPrice,
  productDiscountPrice,
} from "../../Utility/currency";
import HomeSale from "../../views/Home/components/HomeSale";
import "./ProductDetails.css";

class ProductDetails extends Component {
  state = {
    product: null,
    productDetails: {
      product_id: null,
      product_size: "",
      product_quantity: 1,
    },
  };

  componentDidMount() {
    this.setState({
      productDetails: {
        ...this.state.productDetails,
        ["product_id"]: this.props.productProp.id,
      },
      product: this.props.productProp,
    });
  }

  product = this.props.productProp;
  currencyKeys = currencyToUse(this.props.usedCurrencyProp);

  truncateProductName() {
    const productName = this.product.name;
    return productName.length > 45
      ? `${productName.substring(0, 45)}...`
      : productName;
  }

  disableAddToCartButton() {
    let prodDetails = this.state.productDetails;
    if (!this.product.sizes) {
      return !prodDetails.product_id || !prodDetails.product_quantity;
    }
    return (
      !prodDetails.product_id ||
      !prodDetails.product_size ||
      !prodDetails.product_quantity
    );
  }

  handleSubtract = (event) => {
    let stateData = this.state.productDetails;
    if (stateData.product_quantity < 1) {
      return;
    }
    this.setState({
      productDetails: {
        ...this.state.productDetails,
        ["product_quantity"]: stateData.product_quantity - 1,
      },
    });
  };

  handleAdd = (event) => {
    let stateData = this.state.productDetails;
    this.setState({
      productDetails: {
        ...this.state.productDetails,
        ["product_quantity"]: stateData.product_quantity + 1,
      },
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      productDetails: { ...this.state.productDetails, [name]: value },
    });
  };

  handleAddToCart = (event) => {
    // this.props.addProductToCartProp(this.product.id);
    this.props.addProductToCartProp(this.state.productDetails);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-2 mb-4">
          <BreadCrumbs
            breadCrumbLinks={[
              {
                label: this.product.category,
                to: `/category/${this.product.category}`,
              },
              {
                label: this.truncateProductName(),
                to: null,
              },
            ]}
          />
          <div className="product-card bg-white">
            <img
              className="product-card-image"
              src={require(`../../assets/images/shop_images/${this.product.img}`)}
              alt={this.product.name}
            />
            <div className="product-card-details">
              <div className="product-title-container">
                <h3 className="product-title">{this.product.name}</h3>
                <AddToWishList
                  productId={this.product.id}
                  title={"add to wishlist"}
                  classStyleName={"product-wishlist"}
                />
              </div>
              <div>
                {this.product.vendor.name ? (
                  <span>
                    <span className="text-muted">Sold By : </span>
                    <span className="product-vendor">
                      {this.product.vendor.name}
                    </span>
                  </span>
                ) : null}
              </div>
              <div>
                <span>
                  <Ratings
                    ratings={this.product.ratings}
                    containerClassName={"product-rating"}
                    fullStarIcon={"full-star-icon"}
                    halfStarIcon={"half-star-icon"}
                    emptyStarIcon={"empty-star-icon"}
                  />
                </span>
              </div>
              <div className="product-price-container">
                <span className="product-price">
                  {this.currencyKeys.name}
                  {productPrice(this.product.price, this.currencyKeys.value)}
                </span>
                {this.product.discount_price ? (
                  <span className="product-discount-price">
                    {this.currencyKeys.name}
                    {productPrice(
                      this.product.discount_price,
                      this.currencyKeys.value
                    )}
                  </span>
                ) : null}
                {this.product.discount_price ? (
                  <span className="product-percentage-discount">
                    {productDiscountPrice(
                      this.product.price,
                      this.product.discount_price
                    )}
                  </span>
                ) : null}
              </div>

              <div className="product-features-container">
                <div className="product-features">
                  <p className="product-features-title text-muted">Features:</p>
                  <div className="feature-fulfillmemt">
                    <ProductFeatures product={this.product} showText />
                  </div>
                </div>
                {this.product.color ? (
                  <div className="product-features">
                    <p className="product-features-title text-muted">colors:</p>
                    <span
                      className="feature-text feature-color"
                      style={{
                        backgroundColor:
                          this.product.color == "White"
                            ? "black"
                            : this.product.color,
                      }}
                    >
                      {this.product.color}
                    </span>
                  </div>
                ) : null}
                {this.product.sizes ? (
                  <div className="product-features">
                    <p className="product-features-title text-muted">Size:</p>
                    <span className="feature-text">
                      <select
                        className="custom-select custom-select-sm"
                        name="product_size"
                        value={this.state.productDetails.product_size}
                        onChange={(event) => this.handleInputChange(event)}
                      >
                        <option value="" disabled>
                          Select Size
                        </option>
                        {this.product.sizes.map((size, index) => (
                          <option key={index} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                ) : null}
                <div className="product-features">
                  <p className="product-features-title text-muted">quantity:</p>
                  <div className="product-quantity">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={this.product.quantity <= 0}
                      onClick={this.handleSubtract}
                    >
                      -
                    </button>
                    <input
                      name="product_quantity"
                      type="number"
                      className="form-control"
                      placeholder="Qty"
                      value={this.state.productDetails.product_quantity}
                      onChange={(event) => this.handleInputChange(event)}
                    ></input>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      disabled={this.product.quantity <= 0}
                      onClick={this.handleAdd}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-lg"
                  disabled={this.disableAddToCartButton()}
                  onClick={this.handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <HomeSale />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    productProp: state.products.find(
      (product) => product.slug === ownProps.match.params.productSlug
    ),
    usedCurrencyProp: state.usedCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCartProp: (productId) => dispatch(addToCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
