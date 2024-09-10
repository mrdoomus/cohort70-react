import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./TestComponent";
import TestComponentRoute from "./TestComponentRoute";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="/:mottoIndex" element={<TestComponentRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
