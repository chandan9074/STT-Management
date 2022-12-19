import React from "react";
import TotalAmountDisbursed from "../components/containers/billing/TotalAmountDisbursed";
import BillingListIndex from "../components/containers/billing/BillingList/BillingListIndex";
import TimeWiseDisbursements from "../components/containers/billing/TimeWiseDisbursements";
import CustomizeCalender from "../components/Calender/CustomizeCalender";
import CustomRangeCalender from "../components/Calender/CustomRangeCalender";

const Billing = () => {
  return (
    <>
      <TotalAmountDisbursed />
      <TimeWiseDisbursements />
      <BillingListIndex />
      {/*  <CustomizeCalender/>*/}
        <CustomRangeCalender/>
    </>
  );
};

export default Billing;
