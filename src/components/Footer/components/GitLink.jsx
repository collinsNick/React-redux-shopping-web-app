import React from "react";
import { NavLink } from "react-router-dom";

export default function GitLink() {
  return (
    <div className=" shop-footer text-center p-3">
      This project is made and open sourced by
      <NavLink to="http://collinsnick.com/" exact>
        {` Collins Nixon`}
      </NavLink>
      , click
      <NavLink to="http://collinsnick.com/" exact>
        {` Here `}
      </NavLink>
      to get the source code
    </div>
  );
}
