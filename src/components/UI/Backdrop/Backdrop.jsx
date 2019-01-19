import React from 'react';

const backDrop = (props) => {
    return (
        props.showBackDrop ? <div className={'shop-backdrop'} onClick={props.closeSomething}></div> : null
    )
}

export default backDrop;