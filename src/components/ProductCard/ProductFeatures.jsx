import React from "react";
import {
  LocalShipping,
  International,
  Warehouse,
  DukaApproved,
} from "../UI/Icons/Icons";

const ProductFeatures = (props) => {
  return (
    <React.Fragment>
      {props.product.duka_approved ? (
        <span className="shop-card-product-features" title="Duka Aproved">
          <DukaApproved />
          {props.showText ? (
            <span className="feature-text">Duka Aproved</span>
          ) : null}
        </span>
      ) : null}
      {props.product.fulfilled_by_duka ? (
        <span className="shop-card-product-features" title="Fullfiled By Duka">
          <Warehouse />
          {props.showText ? (
            <span className="feature-text">Fullfiled By Duka</span>
          ) : null}
        </span>
      ) : null}
      {props.product.shipped_from_abroad ? (
        <span
          className="shop-card-product-features"
          title="International Shipping"
        >
          <International />
          {props.showText ? (
            <span className="feature-text">Shipped From Abroad</span>
          ) : null}
        </span>
      ) : (
        <span className="shop-card-product-features" title="Local Shipping">
          <LocalShipping />
          {props.showText ? (
            <span className="feature-text">Local Shippping</span>
          ) : null}
        </span>
      )}
    </React.Fragment>
  );
};

export default ProductFeatures;
