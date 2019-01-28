import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../UI/Input/InputField';

const customerInputs = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <InputField
                    label={'First Name'}
                    type={'text'}
                    placeholder={'First Name'}
                    identifier={props.customerInfo.firstName}
                    changed={(event) => props.inputChanged(event, 'firstName')}/>
                </div>

                <div className="col-md-6 mb-3">
                    <InputField
                    label={'Second Name'}
                    type={'text'}
                    placeholder={'Second Name'}
                    identifier={props.customerInfo.secondName}
                    changed={(event) => props.inputChanged(event, 'secondName')}/>
                </div>
            </div>

            <div className="mb-3">
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'you@example.com'}
                    identifier={props.customerInfo.email}
                    changed={(event) => props.inputChanged(event, 'email')}/>

            </div>
        </React.Fragment>
    )
};

customerInputs.propTypes = {
    inputChanged: PropTypes.func.isRequired,
    customerInfo: PropTypes.object.isRequired,
};

export default customerInputs;