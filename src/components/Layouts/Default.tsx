import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Default = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar.Primary />
      <Sidebar.Primary />
      {children}
    </div>
  );
};

export default Default;
