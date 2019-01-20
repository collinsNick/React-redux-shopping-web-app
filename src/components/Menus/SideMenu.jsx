import React from 'react';
import Menu from '../UI/Menu/Menu';
import MenuComponent from '../Menus/MenuComponent';
import PropTypes from 'prop-types';
import mainMenu from "./MainMenu";

const sideMenu = (props) => {
        return (
            <Menu menuClasses="nav flex-column">
                <MenuComponent cartCount={props.cartItemNumber}/>
            </Menu>
        )
};

mainMenu.propTypes = {
    cartItemNumber: PropTypes.number.isRequired
};

export default sideMenu;