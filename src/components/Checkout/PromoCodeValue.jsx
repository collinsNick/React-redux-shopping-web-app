import React from 'react';
import PropTypes from 'prop-types';

const promoCodeFormValue = props => {

    let currencyName = Object.keys(props.currency);

    return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small
                        className={'font-weight-bold'}>{props.usedPromoCode.code}</small>
                </div>
                <span className="text-success">-<span style={{textTransform:'lowercase'}}>{currencyName} </span> {props.discountAmount.toLocaleString()}</span>
            </li>
    )

};

promoCodeFormValue.propTypes = {
    usedPromoCode: PropTypes.object.isRequired,
    discountAmount: PropTypes.number.isRequired,
    currency: PropTypes.object.isRequired
};

export default promoCodeFormValue;