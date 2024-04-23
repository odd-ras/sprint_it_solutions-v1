import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages

import Header from "../layout/Header";

import { Home, About } from "../pages";
import RootLayout from "../layout/RootLayout";

function createAppRouter() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
}

export default createAppRouter;
