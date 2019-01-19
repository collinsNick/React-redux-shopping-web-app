import React from 'react';

const sideMenuWrapper = (props) => {
    return (
        <div className={`side-menu-wrapper ${props.showSideBar ? 'show' : 'hide'}`}>
            {props.children}
        </div>
    )
}

export default sideMenuWrapper;
