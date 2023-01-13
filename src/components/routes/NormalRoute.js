import React from "react";
import { Route, Routes } from "react-router-dom";
import Normal from "../layout/Normal";
import LiveChatDetails from "../pages/post/LiveChatDetails";

const NormalRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Normal />}>
          <Route path="live-chat/slug" element={<LiveChatDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default NormalRoute;
