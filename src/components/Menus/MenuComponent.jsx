import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const menuComponent = (props) => {
    return (
        <React.Fragment>
            <MenuItem linkTo={'/'}>Home</MenuItem>
            <MenuItem linkTo={'/men'}>Men</MenuItem>
            <MenuItem linkTo={'/women'}>Women</MenuItem>
            <MenuItem linkTo={'/children'}>Kids</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Cart <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
        </React.Fragment>
    )
};

menuComponent.propTypes = {
    cartCount: PropTypes.number
};

export default menuComponent;
