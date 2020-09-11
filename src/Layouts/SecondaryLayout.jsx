import React from "react";
import PropTypes from "prop-types";
import LeftColumn from "../components/LeftColumn";
import BreadCrumbs from "../components/UI/BreadCrumbs/BreadCrumbs";

const SecondaryLayout = (props) => {
  return (
    <div className={`container ${props.breadCrumbs ? "py-2" : "py-4"}`}>
      {props.breadCrumbs ? (
        <div className="row">
          <div className="col-sm-12">
            <BreadCrumbs breadCrumbLinks={props.breadCrumbs} />
          </div>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-4 col-lg-3 shop-hide">
          <LeftColumn />
        </div>
        <div className="col-md-8 col-lg-9">
          {props.results ? (
            <div className="row page-results">
              <div className="col-sm-12">{props.results}</div>
            </div>
          ) : null}
          <div className="row">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

SecondaryLayout.prototypes = {
  results: PropTypes.string,
  breadCrumbs: PropTypes.array,
};

export default SecondaryLayout;
