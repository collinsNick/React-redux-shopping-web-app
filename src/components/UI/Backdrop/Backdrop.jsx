import React from "react";
import PropTypes from "prop-types";

const BackDrop = (props) => {
  return props.showB ? (
    <div className={"shop-backdrop"} onClick={props.closeSomething}></div>
  ) : null;
};

BackDrop.propTypes = {
  showBackDrop: PropTypes.bool.isRequired,
  closeSomething: PropTypes.func,
};

export default BackDrop;
