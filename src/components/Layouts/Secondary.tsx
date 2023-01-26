import React, { useContext } from "react";
import Buttons from "../Buttons";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { CommonContext } from "../../context/CommonProvider";

const Secondary = ({ children }: { children: any }) => {
  const commonContext = useContext(CommonContext);

  const handleType = (value: string) => {
    commonContext.handleModuleType(value);
  };
  return (
    <div>
      <Navbar.Primary />
      <Sidebar.Primary />
      <div className="fixed left-1/2 transform -translate-x-1/2 top-12 z-[100] ml-8">
        <Buttons.ToggleRounded
          first="STT"
          second="TTS"
          active={commonContext.type}
          handleType={handleType}
        />
      </div>
      <div className="pt-20 pl-20 relative pr-3 pb-6 bg-[#F4F7FA]">
        {children}
      </div>
    </div>
  );
};

export default Secondary;
