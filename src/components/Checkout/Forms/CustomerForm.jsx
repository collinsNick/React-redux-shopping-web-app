import React from 'react';
import PropTypes from 'prop-types';

const customerForm = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                           required/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                           required/>
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </React.Fragment>
    )
};

customerForm.propTypes = {
};

export default customerForm;