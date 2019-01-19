import React from 'react';
import PropTypes from 'prop-types';

const menu = (props) => {
    return (
        <ul className={props.menuClasses}>
            {props.children}
        </ul>
    )
};

menu.propTypes = {
    menuClasses: PropTypes.string.isRequired
};

export default menu;
