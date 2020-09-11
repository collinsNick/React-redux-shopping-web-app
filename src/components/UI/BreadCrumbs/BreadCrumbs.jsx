import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const BreadCrumbs = (props) => {
  let links = props.breadCrumbLinks;

  function generateBreadCrumb() {
    let crumbs = [];
    if (links.length) {
      links.forEach((link, index) => {
        if (index === links.length - 1) {
          crumbs.push(
            <li className="breadcrumb-item active" key={index}>
              {link.label}
            </li>
          );
        } else {
          crumbs.push(
            <li className="breadcrumb-item" key={index}>
              <NavLink to={link.to} exact>
                {link.label}
              </NavLink>
            </li>
          );
        }
      });
    }
    return crumbs;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to={"/"} exact>
            Home
          </NavLink>
        </li>
        {generateBreadCrumb()}
      </ol>
    </nav>
  );
};

BreadCrumbs.prototypes = {
  breadCrumbLinks: PropTypes.array,
};

export default BreadCrumbs;
