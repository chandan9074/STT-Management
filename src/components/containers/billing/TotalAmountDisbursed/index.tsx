import React, { useContext, useEffect, useState } from "react";
import { amountDisbursed } from "../../../../data/billing/timeAmountDisbursed";
import { yearlyDataDT } from "../../../../types/billingTypes";
import AmountPart from "./AmountPart";
import HistoryChartPart from "./HistoryChartPart";
import { BillingContext } from "../../../../context/BillingProvider";
import { LoadingSkeleton } from "../../../../assets/loadingSkeleton";

const TotalAmountDisbursed = () => {
  const [currentYear, setCurrentYear] = useState(0);
  const [currentData, setCurrentData] = useState<yearlyDataDT>();

  const billingContext = useContext(BillingContext);

  useEffect(() => {
    billingContext.GetAmountDisbursed();
  }, []);

  useEffect(() => {
    console.log("billingContext.amountDropDown", billingContext.amountDropDown);
    if (billingContext.amountDisbursed && billingContext.amountDropDown) {
      const data = billingContext.amountDisbursed.yearlyData.filter(
        (item) => item.year === billingContext.amountDropDown
      );
      console.log("hello man", data);
      if (data) {
        console.log("data", data[0]);
        setCurrentData(data[0]);
      }
    }
  }, [
    currentData,
    billingContext.amountDisbursed,
    billingContext.amountDropDown,
  ]);

  return (
    <>
      {billingContext.amountDisbursed ? (
        <div className="py-4 px-6 rounded-md bg-primary-ct-blue-60 grid grid-cols-12 shadow-bottom-light-blue">
          <div className="col-span-4">
            <AmountPart
              totalAmount={billingContext.amountDisbursed.totalAmount}
              totalHours={billingContext.amountDisbursed.totalHours}
            />
          </div>
          <div className="col-span-8 pl-16">
            {currentData ? (
              <HistoryChartPart
                currentData={currentData}
                yearList={billingContext.amountDisbursed.yearList}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <img
          src={LoadingSkeleton.totalAmountDisbursed}
          alt=""
          className="w-full"
        />
      )}
    </>
  );
};

export default TotalAmountDisbursed;
