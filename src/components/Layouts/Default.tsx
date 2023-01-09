import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../context/CommonProvider";
import Buttons from "../Buttons";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Default = ({ children }: { children: any }) => {
  const [showToggle, setShowToggle] = useState(false);

  const commonContext = useContext(CommonContext);

  const handleType = (value: string) => {
    commonContext.handleModuleType(value);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 270) {
        // setShadow(true);
        setShowToggle(true);
      } else {
        // setShadow(false);
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div>
      <Navbar.Primary />
      <Sidebar.Primary />
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 top-12 z-[90] ml-8 animate-fadeIn ${
          showToggle ? "block" : "hidden"
        }`}
      >
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

export default Default;
