import React from "react";
import PropTypes from "prop-types";
import { currencyToUse } from "../../../Utility/currency";

const deliveryOptions = (props) => {
  let currencyKeys = currencyToUse(props.currency);
  let currencyName = currencyKeys.name;
  let currencyValue = currencyKeys.value;

  return (
    <ul>
      <div className="row">
        {props.deliveryOptions.map((option, index) => {
          return (
            <div
              className="col-11 col-sm-10 col-md-8 py-2 text-capitalize shop-delivery-options mt-3"
              key={index}
            >
              <li className={" "}>
                <label className={"w-100 d-flex flex-row"}>
                  <input
                    key={index}
                    type="radio"
                    value={option.id}
                    checked={props.usedDeliveryOption === option.id}
                    onChange={props.deliveryOptionChanged}
                  />
                  <div className={"w-100 d-flex justify-content-between"}>
                    <div>{option.name}</div>
                    <div className={""}>{option.duration}</div>
                    <div>
                      <span style={{ textTransform: "lowercase" }}>
                        {currencyName}
                      </span>
                      {Math.round(option.cost * currencyValue)}
                    </div>
                  </div>
                </label>
              </li>
            </div>
          );
        })}
      </div>
    </ul>
  );
};

deliveryOptions.propTypes = {
  deliveryOptions: PropTypes.array.isRequired,
  usedDeliveryOption: PropTypes.number,
  deliveryOptionChanged: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
};

export default deliveryOptions;
