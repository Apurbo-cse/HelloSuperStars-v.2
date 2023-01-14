import React from "react";
import { Route, Routes } from "react-router-dom";
import StarLayout from "../layout/StarLayout";
import Profile from "../pages/star/Profile";

const StarRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/star-profile" element={<StarLayout />}>
          <Route path=":id" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default StarRoute;
