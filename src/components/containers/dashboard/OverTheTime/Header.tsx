import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-base font-semibold text-ct-blue-45 mb-0 ml-3">
          Over the time
        </h1>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-green-A10 mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">Valid</h3>
        </div>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-orange-A10 mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">Invalid</h3>
        </div>
        <div className="flex items-center ml-7">
          <div className="w-2 h-2 rounded-full bg-[#136EE5] mr-2" />
          <h3 className="text-xxs font-medium text-ct-blue-90 mb-0">
            Not Checked
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
