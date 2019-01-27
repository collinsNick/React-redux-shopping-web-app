import React from 'react';
import PropTypes from 'prop-types';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>First name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="First name"
                           value={props.customerInfo.firstName.value}
                           // pass first name identifier to parent component
                           onChange={(event) => props.inputChanged(event,'firstName')}/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value={props.customerInfo.secondName.value}
                        onChange={(event) => props.inputChanged(event,'secondName')}/>
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={props.customerInfo.email.value}
                    onChange={(event) =>  props.inputChanged(event,'email')}/>
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;