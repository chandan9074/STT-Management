import React from "react";
import Icons from "../../assets/Icons";

const Primary = () => {
  return (
    <div className="flex justify-between items-center py-4 pr-4 pl-[85px] shadow-md fixed w-full z-[90] bg-white">
      <div className="flex items-center">
        <img src={Icons.currency} alt="currency" className="w-5 h-5" />
        <h3 className="text-base font-medium ml-2 bg-gradient-to-r from-[#FF24FB] via-secondary-blue-50 to-[#0093D9] text-transparent bg-clip-text">
          Billing
        </h3>
      </div>
      <div className="flex items-center">
        <img src={Icons.admin} alt="user1" className="w-6 h-6 mr-2" />
        <div>
          <h4 className="text-xxs text-ct-blue-95 font-medium mb-0.5">
            Md. Jalal Uddin
          </h4>
          <h5 className="text-xxs text-blue-gray-75 mb-0">Admin</h5>
        </div>
      </div>
    </div>
  );
};

export default Primary;
