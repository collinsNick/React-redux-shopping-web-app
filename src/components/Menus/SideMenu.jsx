import React from 'react';
import Menu from '../UI/Menu/Menu';
import MenuComponent from '../Menus/MenuComponent';
import PropTypes from 'prop-types';
import mainMenu from "./MainMenu";

const SideMenu = (props) => {
    return (
        <React.Fragment>
            <Menu menuClasses="nav flex-column">
                <MenuComponent cartCount={props.cartItemNumber}/>
            </Menu>
            {/*<Backdrop showBackDrop={props.showBackDrop}/>*/}
        </React.Fragment>
    )
};

mainMenu.propTypes = {
    cartItemNumber: PropTypes.number.isRequired
};

export default SideMenu;