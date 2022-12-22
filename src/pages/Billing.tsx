import React from "react";
import TotalAmountDisbursed from "../components/containers/billing/TotalAmountDisbursed";
import BillingListIndex from "../components/containers/billing/BillingList/BillingListIndex";
import TimeWiseDisbursements from "../components/containers/billing/TimeWiseDisbursements";
import CustomizeCalender from "../components/calender/CustomizeCalender";
import CustomRangeCalender from "../components/calender/CustomRangeCalender";

const Billing = () => {
  return (
    <>
      <TotalAmountDisbursed />
      <TimeWiseDisbursements />
    </>
  );
};

export default Billing;
