import React from "react";
import Icons from "../../assets/Icons";

const Primary = () => {
  return (
    <div className="flex justify-between items-center py-3 pr-6 pl-[85px] shadow-md fixed w-full z-[90] bg-white">
      <div className="flex items-center">
        <img src={Icons.currency} alt="currency" className="w-6 h-6" />
        <h3 className="text-heading-6 font-medium ml-2 bg-gradient-to-r from-[#FF24FB] via-secondary-blue-50 to-[#0093D9] text-transparent bg-clip-text">
          Billing
        </h3>
      </div>
      <div className="flex items-center">
        <img
          src={Icons.admin}
          alt="user1"
          className="w-[26px] h-[26px] mr-2.5"
        />
        <div>
          <h4 className="text-small text-ct-blue-95 font-medium mb-0">
            Md. Jalal Uddin
          </h4>
          <h5 className="text-small text-blue-gray-75 mb-0">Admin</h5>
        </div>
        <button className="ml-5">
          <img src={Icons.arrow_drop_down_blue_gray} alt="user1" />
        </button>
      </div>
    </div>
  );
};

export default Primary;
