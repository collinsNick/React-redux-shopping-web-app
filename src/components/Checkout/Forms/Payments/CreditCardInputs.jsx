import React from 'react';
import PropTypes from 'prop-types';

const creditCardInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Name on card</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full names on card"
                        value={props.creditCardInfo.creditCardName.value}
                        onChange={(event) => props.inputChanged(event,'creditCardName')}/>
                    <div className="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label>Credit card number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Credit card number"
                        value={props.creditCardInfo.creditCardNumber.value}
                        onChange={(event) => props.inputChanged(event,'creditCardNumber')}/>
                    <div className="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <label>Expiration</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        value={props.creditCardInfo.creditCardExpiration.value}
                        onChange={(event) => props.inputChanged(event,'creditCardExpiration')}/>
                    <div className="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label>CVV</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                        value={props.creditCardInfo.creditCardCvv.value}
                        onChange={(event) => props.inputChanged(event,'creditCardCvv')}/>
                    <div className="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

creditCardInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    creditCardInfo: PropTypes.object.isRequired,
};

export default creditCardInputs;