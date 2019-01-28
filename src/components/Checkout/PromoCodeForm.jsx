import React from 'react';
import PropTypes from 'prop-types';

const promoCodeForm = props => {

        return (
            <form className="card p-2" onSubmit={props.setPromoCode}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Promo code"
                        value={props.promoCode}
                        onChange={ props.promoCodeChangeHandler}
                    />
                    <div className="input-group-append">
                        <button
                            disabled={props.promoCode.length < 5}
                            className="btn shop-btn-secondary">
                            Redeem
                        </button>
                    </div>
                </div>
            </form>
        )
    };

promoCodeForm.propTypes = {
    setPromoCode: PropTypes.func.isRequired,
    promoCodeChangeHandler: PropTypes.func.isRequired,
    promoCode:PropTypes.string.isRequired
};

export default promoCodeForm;