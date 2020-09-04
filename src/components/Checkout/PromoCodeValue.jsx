import React from "react";
import PropTypes from "prop-types";

const promoCodeFormValue = (props) => {
  let currencyKeys = Object.keys(props.currency);
  let currencyName = props.currency[currencyKeys[1]];

  return (
    <React.Fragment>
      <li className="list-group-item">
        <h6>Applied Promo code</h6>
        <div className="d-flex justify-content-between">
          <div className="text-success">
            <small className={"font-weight-bold"}>
              {props.usedPromoCode.code}
            </small>
          </div>
          <span className="text-success">
            -<span style={{ textTransform: "lowercase" }}>{currencyName}</span>
            {props.discountAmount.toLocaleString()}
          </span>
        </div>
      </li>
    </React.Fragment>
  );
};

promoCodeFormValue.propTypes = {
  usedPromoCode: PropTypes.object.isRequired,
  discountAmount: PropTypes.number.isRequired,
  currency: PropTypes.object.isRequired,
};

export default promoCodeFormValue;
