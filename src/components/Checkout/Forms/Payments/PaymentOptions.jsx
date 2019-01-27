import React from 'react';
import PropTypes from 'prop-types';

const paymentOptions = props => {

    return (
        <div className="d-block my-3">
            <div className="custom-control custom-radio">
                <input
                    type="radio"
                    className="custom-control-input"
                    value="creditCard"
                    checked={props.paymentMethod === "creditCard"}
                    onChange={(event) => props.paymentOptionChanged(event)}
                    />
                <label className="custom-control-label">Credit card</label>
            </div>
            <div className="custom-control custom-radio">
                <input
                    type="radio"
                    className="custom-control-input"
                    value="payPal"
                    checked={props.paymentMethod === "payPal"}
                    onChange={(event) => props.paymentOptionChanged(event)}
                />
                <label className="custom-control-label">PayPal</label>
            </div>
            <div className="custom-control custom-radio">
                <input
                    type="radio"
                    className="custom-control-input"
                    value="mobileMoney"
                    checked={props.paymentMethod === "mobileMoney"}
                    onChange={props.paymentOptionChanged}
                />
                <label className="custom-control-label">Mobile Money</label>
            </div>
        </div>
    )
};

paymentOptions.propTypes = {
    paymentOptionChanged: PropTypes.func.isRequired,
    paymentMethod: PropTypes.string.isRequired
};

export default paymentOptions;