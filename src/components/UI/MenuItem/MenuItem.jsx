import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li className={"nav-item"}>
      <NavLink className={"nav-link"} to={props.linkTo} exact>
        {props.children}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  navItemClasses: PropTypes.string,
  navLinkClasses: PropTypes.string,
  linkTo: PropTypes.string,
};

export default MenuItem;
