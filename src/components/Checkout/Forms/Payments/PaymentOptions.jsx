import React from 'react';
import PropTypes from 'prop-types';

const paymentOptions = props => {

    return (
        <div className="d-block my-3">
            <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" className="custom-control-input"
                       checked required/>
                <label className="custom-control-label">Credit card</label>
            </div>
            <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" className="custom-control-input"
                       required/>
                <label className="custom-control-label">PayPal</label>
            </div>
            <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" className="custom-control-input"
                       required/>
                <label className="custom-control-label">Mobile Money</label>
            </div>
        </div>
    )
};

paymentOptions.propTypes = {
    setPromoCode: PropTypes.func.isRequired,
    promoCodeChangeHandler: PropTypes.func.isRequired,
    promoCode: PropTypes.string.isRequired
};

export default paymentOptions;