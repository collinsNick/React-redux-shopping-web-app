import React from 'react';

const mainPageWrapper = (props) => {
    return(
            <div className="main-wrapper">
                {props.children}
            </div>
    )
}

export default mainPageWrapper;
