import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop
        showBackDrop={props.showModal}
        closeSomething={props.closeModalClick}
      />
      <div className={"shop-modal fade show"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p className={"pt-3"}>{props.children}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn shop-btn-primary"
                onClick={props.closeModalClick}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  closeModalClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Modal;
