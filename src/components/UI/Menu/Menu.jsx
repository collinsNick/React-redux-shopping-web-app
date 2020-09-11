import React from "react";
import PropTypes from "prop-types";

const Menu = (props) => {
  return <ul className={props.menuClasses}>{props.children}</ul>;
};

Menu.propTypes = {
  menuClasses: PropTypes.string.isRequired,
};

export default Menu;
