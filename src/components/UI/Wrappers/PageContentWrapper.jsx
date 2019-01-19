import React from 'react';

const pageContentWrapper = (props) => {
    return (
        <div className={"page-wrapper"}>
            {props.children}
        </div>
    )
}

export default pageContentWrapper;
