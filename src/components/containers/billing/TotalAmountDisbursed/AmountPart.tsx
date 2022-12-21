import React from "react";

const AmountPart = ({
  totalAmount,
  totalHours,
}: {
  totalAmount: string;
  totalHours: string;
}) => {
  return (
    <>
      <h1 className="text-small font-medium text-ct-blue-05 mb-2">
        Total Amount Disbursed
      </h1>
      <div className="relative w-full h-52">
        <div className="absolute top-0 left-0 flex items-start">
          <h6 className="text-base font-medium text-ct-blue-10 mt-4 mr-3 mb-0">
            BDT
          </h6>
          <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-winter-wizard via-green-10 to-venetian-red text-transparent bg-clip-text">
            {totalAmount}
          </h1>
        </div>
        <div className="absolute flex w-full h-full top-0 left-0 justify-center items-start">
          <div className="w-1 h-48 rotate-[18deg] bg-gradient-to-r from-winter-wizard via-green-10 to-venetian-red" />
        </div>
        <div className="absolute bottom-3 right-0">
          <h6 className="text-base font-medium text-ct-blue-10">Total Valid</h6>
          <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-winter-wizard via-green-10 to-venetian-red text-transparent bg-clip-text">
            {totalHours}hr
          </h1>
        </div>
      </div>
    </>
  );
};

export default AmountPart;