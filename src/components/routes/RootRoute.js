import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import Eshowcase from "../pages/e-showcase/Eshowcase";
import Home from "../pages/Home";

const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Master />}>
          <Route index element={<Home />} />
          <Route path="e-showcase" element={<Eshowcase />} />
        </Route>
      </Routes>
    </>
  );
};

export default RootRoute;
