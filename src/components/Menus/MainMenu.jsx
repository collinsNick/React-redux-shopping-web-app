import React from 'react';
import Menu from '../UI/Menu/Menu';
import MenuComponent from '../Menus/MenuComponent';
import PropTypes from 'prop-types';

const mainMenu = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <span className="navbar-brand">DUKA</span>
            <button
                className="navbar-toggler"
                onClick={props.toggleSideBar}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <Menu menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
                    <MenuComponent cartCount={props.cartItemNumber}/>
                </Menu>
            </div>
        </nav>
    )
};

mainMenu.propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    cartItemNumber: PropTypes.number.isRequired
};

export default mainMenu;