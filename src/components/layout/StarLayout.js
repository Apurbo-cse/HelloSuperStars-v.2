import React from "react";
import { Outlet } from "react-router-dom";

import { useTheme } from "../context.js/ThemeContext";

import StarProfile from "../pages/star/StarProfile";
import StarRight from "../pages/star/StarRight";

const StarLayout = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div
        className={` mb-4  ${
          isDarkMode ? "star-bd-head " : "star-bd-head-dark"
        }`}
      >
        {" "}
        <div className="container max-body-width">
          <div className="row">
            <StarProfile />
          </div>
        </div>
      </div>
      <div className="container max-body-width">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-7 mb-2  m-0 p-0">
            <Outlet />
          </div>
          <div className="col-lg-4 mb-2 m-0 p-0">
            <StarRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default StarLayout;
