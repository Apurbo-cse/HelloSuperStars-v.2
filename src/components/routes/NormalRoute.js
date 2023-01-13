import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCard from "../common/details/DetailsCard";

const NormalRoute = () => {
  return (
    <>
      <Routes>
        <Route path="slug" element={<DetailsCard />} />
      </Routes>
    </>
  );
};

export default NormalRoute;
