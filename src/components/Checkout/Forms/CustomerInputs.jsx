import React from 'react';
import PropTypes from 'prop-types';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>First name</label>
                    <input type="text"
                           className={['form-control',
                               props.customerInfo.firstName.touched &&
                               !props.customerInfo.firstName.valid ?
                                   'shop-input-error' : ''
                           ].join(' ')}
                           placeholder="First name"
                           value={props.customerInfo.firstName.value}
                        // pass first name identifier to parent component
                           onChange={(event) => props.inputChanged(event, 'firstName')}/>
                    {!props.customerInfo.firstName.valid ?
                        <div className="shop-input-errors">
                            {props.customerInfo.firstName.errorsMsg}
                        </div> : null}
                </div>
                <div className="col-md-6 mb-3">
                    <label>Second name</label>
                    <input
                        type="text"
                        className={['form-control',
                        props.customerInfo.secondName.touched &&
                               !props.customerInfo.secondName.valid ?
                                   'shop-input-error' : ''
                           ].join(' ')}
                        placeholder="Last name"
                        value={props.customerInfo.secondName.value}
                        onChange={(event) => props.inputChanged(event, 'secondName')}/>
                    {!props.customerInfo.secondName.valid ?
                        <div className="shop-input-errors">
                            {props.customerInfo.secondName.errorsMsg}
                        </div> : null}
                </div>
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className={['form-control',
                    props.customerInfo.email.touched &&
                               !props.customerInfo.email.valid ?
                                   'shop-input-error' : ''
                           ].join(' ')}
                    placeholder="you@example.com"
                    value={props.customerInfo.email.value}
                    onChange={(event) => props.inputChanged(event, 'email')}/>
                {!props.customerInfo.email.valid ?
                    <div className="shop-input-errors">
                        {props.customerInfo.email.errorsMsg}
                    </div> : null}
            </div>
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;