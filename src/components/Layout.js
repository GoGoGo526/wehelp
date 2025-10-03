import React from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "./nav-component";

const Layout = () => {
  return (
    <>
      <NavComponent />
      <Outlet />
    </>
  );
};

export default Layout;
