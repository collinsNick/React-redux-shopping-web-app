import React from 'react';
import PropTypes from 'prop-types';

const sideMenuWrapper = (props) => {
    return (
        <div className={`side-menu-wrapper ${props.showSideBar ? 'show' : 'hide'}`}>
            {props.children}
        </div>
    )
};

sideMenuWrapper.propTypes = {
    showSideBar: PropTypes.bool.isRequired
};

export default sideMenuWrapper;
