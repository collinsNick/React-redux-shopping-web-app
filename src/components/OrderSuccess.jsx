import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <React.Fragment>
      <div className={"text-center"}>
        <h3 className={"text-success"}>Success!</h3>
        <h5 className={"py-4"}>
          Your order is successful. Thank you for shopping with us.
        </h5>
        <Link className="btn btn-lg shop-btn-secondary checkout" to={"/"}>
          Continue Shopping
        </Link>
        <div className={"text-muted py-3"}>
          check your order object in your console
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSuccess;
