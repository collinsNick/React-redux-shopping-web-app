import React from 'react';
import PropTypes from 'prop-types';

const promoCodeFormValue = props => {

    return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small
                        className={'font-weight-bold'}>{props.usedPromoCode.code}</small>
                </div>
                <span className="text-success">-Ksh {props.discountAmount.toLocaleString()}</span>
            </li>
    )

};

promoCodeFormValue.propTypes = {
    usedPromoCode: PropTypes.object.isRequired,
    discountAmount: PropTypes.number.isRequired
};

export default promoCodeFormValue;