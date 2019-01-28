import React from 'react';
import PropTypes from 'prop-types';

const paymentOptions = props => {

    return (
        <ul>
            <li>
                <label>
                    <input
                        type="radio"
                        value="creditCard"
                        checked={props.paymentMethod === "creditCard"}
                        onChange={props.paymentOptionChanged}
                    />
                    Credit Card
                </label>
            </li>

            <li>
                <label>
                    <input
                        type="radio"
                        value="mobileMoney"
                        checked={props.paymentMethod === "mobileMoney"}
                        onChange={props.paymentOptionChanged}
                    />
                    Mobile Money
                </label>
            </li>
        </ul>
    )
};

paymentOptions.propTypes = {
    paymentOptionChanged: PropTypes.func.isRequired,
    paymentMethod: PropTypes.string.isRequired
};

export default paymentOptions;