import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Default = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar.Primary />
      <Sidebar.Primary />
      <div className="pt-20 pl-20 relative ">{children}</div>
    </div>
  );
};

export default Default;
