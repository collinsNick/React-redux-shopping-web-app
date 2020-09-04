import React from "react";
import { NavLink } from "react-router-dom";

export default function GitLink() {
  return (
    <div className=" shop-footer text-center p-3">
      This project is made and open sourced by
      <a href="http://collinsnick.com/" target="_blank">
        {` Collins Nixon`}
      </a>
      , click
      <a
        href="https://github.com/collinsNick/React-redux-shopping-web-app"
        target="_blank"
      >
        {` Here `}
      </a>
      to get the source code
    </div>
  );
}
