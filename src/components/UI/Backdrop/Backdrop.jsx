import React from 'react';
import PropTypes from 'prop-types';

const backDrop = (props) => {
    return (
        props.showBackDrop ? <div className={'shop-backdrop'} onClick={props.closeSomething}></div> : null
    )
};

backDrop.propTypes = {
    showBackDrop : PropTypes.bool.isRequired,
    closeSomething : PropTypes.func,
};

export default backDrop;