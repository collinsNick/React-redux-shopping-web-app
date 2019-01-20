import React from 'react';
import PropTypes from 'prop-types';

const sideMenuWrapper = (props) => {
    return (
        <div
            className={`side-menu-wrapper ${props.showSideBar ? 'show' : 'hide'}`}
            onClick={props.toggleSideMenu}>
            {props.children}
        </div>
    )
};

sideMenuWrapper.propTypes = {
    showSideBar: PropTypes.bool.isRequired,
    toggleSideMenu: PropTypes.func.isRequired
};

export default sideMenuWrapper;
