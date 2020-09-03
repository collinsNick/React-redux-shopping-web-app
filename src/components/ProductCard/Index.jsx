import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AddToWishList from "../AddToWishlist/AddToWishlist";
import ProductFeatures from "../../components/ProductCard/ProductFeatures";
import Ratings from "../Ratings/Ratings";
import {
  currencyToUse,
  productPrice,
  productDiscountPrice,
} from "../../Utility/currency";
import "./ProductCard.css";

const Index = (props) => {
  let currencyKeys = currencyToUse(props.currency);
  let currencyValue = currencyKeys.value;
  let currencyName = currencyKeys.name;
  let item = props.product;

  return (
    <React.Fragment>
      <div className={"col-sm-6 col-md-6 col-lg-4 mb-4"}>
        <div className="shop-card">
          <div className="shop-card-image">
            <NavLink to={`/product/${item.slug}`} exact>
              <img
                src={require(`../../assets/images/shop_images/${item.img}`)}
                alt={item.img.split(".")[0]}
              />
            </NavLink>
            {item.sale ? <span className="shop-card-sale">Sale</span> : null}
            <AddToWishList
              productId={item.id}
              title={"add to wishlist"}
              classStyleName={"shop-card-wishlist"}
            />
            {item.discount_price ? (
              <span className="shop-card-discount">
                {productDiscountPrice(item.price, item.discount_price)}
              </span>
            ) : null}
          </div>

          <div className="shop-card-content">
            <h2 className="shop-card-vendor">
              {item.vendor ? item.vendor.name : null}
            </h2>
            <h3 className="shop-card-title">{item.name}</h3>
            <Ratings
              ratings={item.ratings}
              containerClassName={"shop-card-ratings-container"}
              fullStarIcon={"full-star-icon"}
              halfStarIcon={"half-star-icon"}
              emptyStarIcon={"empty-star-icon"}
            />
            <div className="shop-card-price-container">
              <span className="shop-card-price">
                {currencyName}
                {productPrice(item.price, currencyValue)}
              </span>
              {item.discount_price ? (
                <span className={"shop-card-discount-price"}>
                  <span style={{ textTransform: "lowercase" }}>
                    {currencyName}
                  </span>
                  {productPrice(item.discount_price, currencyValue)}
                </span>
              ) : null}
            </div>

            <div className="shop-card-features-container">
              <ProductFeatures product={item} />
            </div>
            <NavLink
              className="btn shop-btn-primary btn-block"
              to={`/product/${item.slug}`}
              exact
            >
              View Item
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Index.propTypes = {
  product: PropTypes.object.isRequired,
  currency: PropTypes.object.isRequired,
};

export default Index;
