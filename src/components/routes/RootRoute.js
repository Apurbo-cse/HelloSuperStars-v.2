import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../layout/Master";
import Eshowcase from "../pages/e-showcase/Eshowcase";
import Home from "../pages/Home";
import LiveChat from "../pages/post/LiveChat";

const RootRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Master />}>
          <Route index element={<Home />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="e-showcase" element={<Eshowcase />} />
        </Route>
      </Routes>
    </>
  );
};

export default RootRoute;
