import React from "react";
import { Outlet } from "react-router-dom";

const Normal = () => {
  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-between ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Normal;
