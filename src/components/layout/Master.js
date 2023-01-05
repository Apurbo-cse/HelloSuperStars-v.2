import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navigation from "./include/Navigation";

const Master = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </>
  );
};

export default Master;
