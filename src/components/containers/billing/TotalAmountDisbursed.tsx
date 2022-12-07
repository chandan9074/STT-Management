import React from "react";
import Dropdown from "../../Dropdown";
import { amountDisbursed } from "../../../data/billing/timeAmountDisbursed";

const TotalAmountDisbursed = () => {
  return (
    <div className="py-4 px-6 rounded-md bg-primary-ct-blue-60 grid grid-cols-12">
      <div className="col-span-4">
        <h1 className="text-small font-medium text-ct-blue-05 mb-2">
          Total Amount Disbursed
        </h1>
        <div className="relative w-full h-52">
          <div className="absolute top-0 left-0 flex items-start">
            <h6 className="text-base font-medium text-ct-blue-10 mt-4 mr-3 mb-0">
              BDT
            </h6>
            <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-[#A1E6FF] via-green-10 to-[#F7DEE1] text-transparent bg-clip-text">
              {amountDisbursed.totalAmount}
            </h1>
          </div>
          <div className="absolute flex w-full h-full top-0 left-0 justify-center items-start">
            <div className="w-1 h-48 rotate-[18deg] bg-gradient-to-r from-[#A1E6FF] via-green-10 to-[#F7DEE1]" />
          </div>
          <div className="absolute bottom-3 right-0">
            <h6 className="text-base font-medium text-ct-blue-10">
              Total Valid
            </h6>
            <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-[#A1E6FF] via-green-10 to-[#F7DEE1] text-transparent bg-clip-text">
              {amountDisbursed.totalHours}hr
            </h1>
          </div>
        </div>
      </div>
      <div className="col-span-8 pl-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="text-base font-semibold text-ct-blue-05 mb-0 mr-7">
              Over the time
            </h3>
            <div className="flex items-center mr-6">
              <div className="w-2 h-2 rounded-full bg-[#59C1BD] mr-2" />
              <h5 className="text-xxs font-medium text-ct-blue-10 mb-0">
                1st Disbursement
              </h5>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#A0E4CB] mr-2" />
              <h5 className="text-xxs font-medium text-ct-blue-10 mb-0">
                2nd Disbursement
              </h5>
            </div>
          </div>
          <Dropdown.Type1 data={amountDisbursed.yearlyHistory.yearList} />
        </div>
      </div>
    </div>
  );
};

export default TotalAmountDisbursed;
