import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
