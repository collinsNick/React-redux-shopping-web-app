import React from "react";
import PropTypes from "prop-types";

const SideMenuWrapper = (props) => {
  return (
    <div
      className={`side-menu-wrapper ${props.showSideBar ? "show" : "hide"}`}
      onClick={props.toggleSideMenu}
    >
      {props.children}
    </div>
  );
};

SideMenuWrapper.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenuWrapper;
