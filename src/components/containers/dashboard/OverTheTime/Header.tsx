import React from "react";
import Icons from "../../../../assets/Icons";

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
      <div className="flex items-center">
        <button>
          <img src={Icons.left_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
        <div className="bg-ct-blue-05 rounded-[4px] py-1.5 px-4 text-small font-medium text-ct-blue-90 mx-2">
          August'22
        </div>
        <button>
          <img src={Icons.right_indicator} alt="" className="py-1.5 px-1.5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
