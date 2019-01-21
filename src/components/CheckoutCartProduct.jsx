import React from 'react';
import PropTypes from 'prop-types';

const checkoutCartProduct = (props) => {
    return (
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{props.checkoutProductName}</h6>
                    <small className="text-muted">{props.checkoutProductCategory}</small>
                </div>
                <span className="text-muted">Ksh {props.checkoutProductPrice}</span>
            </li>
        </React.Fragment>
    )
};

checkoutCartProduct.propTypes = {
    checkoutProductName : PropTypes.string.isRequired,
    checkoutProductCategory : PropTypes.string.isRequired,
    checkoutProductPrice : PropTypes.number.isRequired
};

export default checkoutCartProduct;
