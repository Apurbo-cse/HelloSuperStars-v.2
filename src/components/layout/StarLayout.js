import React from "react";
import { Outlet } from "react-router-dom";

const StarLayout = () => {
  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-between">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StarLayout;
