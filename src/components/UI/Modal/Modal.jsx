import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return(
        <React.Fragment>
            <Backdrop showBackDrop={props.showModal} closeSomething={props.closeModalClick}/>
            <div className={'modal fade show'} style={{display:'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p className={'pt-3'}>{props.children}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-secondary"
                            onClick={props.closeModalClick}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default modal;
