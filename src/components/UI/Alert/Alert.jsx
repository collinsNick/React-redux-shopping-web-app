import React from 'react';
import PropTypes from 'prop-types';

const alert = (props) => {
    return (
        <div className={`alert ${props.alertType} alert-dismissible fade show`} role="alert">
            {props.children}
            <button
                className="close"
                onClick={props.closeAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

alert.propTypes = {
    closeAlert: PropTypes.func.isRequired,
    alertType: PropTypes.string.isRequired
};

export default alert;
