import React from "react";
import { Outlet } from "react-router-dom";

import LeftSidebar from "./include/LeftSidebar";
import RightSidebar from "./include/RightSidebar";

const Master = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="col-lg-3 left-position">
            {" "}
            <LeftSidebar />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 post-main">
            <Outlet />
          </div>
          <div className="col-lg-3 right-position">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Master;
