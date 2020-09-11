import React from "react";

const GitLink = () => {
  return (
    <div className=" shop-footer text-center p-3">
      This project is made and open sourced by
      <a
        href="http://collinsnick.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Collins Nixon`}
      </a>
      , click
      <a
        href="https://github.com/collinsNick/React-redux-shopping-web-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Here `}
      </a>
      to get the source code
    </div>
  );
};

export default GitLink;
