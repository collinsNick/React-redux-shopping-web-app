import React from 'react';

const backDrop = (props) => {
    return (
        props.showBackDrop ? <div className={'modal-backdrop show'} onClick={props.closeModal}></div> : null
    )
}

export default backDrop;