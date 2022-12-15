import React, { useContext, useEffect, useState } from "react";
import { amountDisbursed } from "../../../../data/billing/timeAmountDisbursed";
import { yearlyDataDT } from "../../../../types/billingTypes";
import AmountPart from "./AmountPart";
import HistoryChartPart from "./HistoryChartPart";
import { BillingContext } from "../../../../context/BillingProvider";

const TotalAmountDisbursed = () => {
  const [currentYear, setCurrentYear] = useState(amountDisbursed.yearList[0]);
  const [currentData, setCurrentData] = useState<yearlyDataDT>();

  const billingContext = useContext(BillingContext);

  useEffect(() => {
    billingContext.GetAmountDisbursed();

    if (billingContext.amountDisbursed) {
      const data = billingContext.amountDisbursed.yearlyData.filter(
        (item) => item.year === currentYear
      );
      if (data) {
        setCurrentData(data[0]);
      }
    }
  }, [currentYear, billingContext]);

  return (
    <div className="py-4 px-6 rounded-md bg-primary-ct-blue-60 grid grid-cols-12 shadow-bottom-light-blue">
      <div className="col-span-4">
        <AmountPart
          totalAmount={amountDisbursed.totalAmount}
          totalHours={amountDisbursed.totalHours}
        />
      </div>
      <div className="col-span-8 pl-16">
        {currentData && (
          <HistoryChartPart
            currentData={currentData}
            yearList={amountDisbursed.yearList}
          />
        )}
      </div>
    </div>
  );
};

export default TotalAmountDisbursed;
