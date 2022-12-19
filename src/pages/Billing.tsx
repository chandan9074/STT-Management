import React from "react";
import TotalAmountDisbursed from "../components/containers/billing/TotalAmountDisbursed";
import BillingListIndex from "../components/containers/billing/BillingList/BillingListIndex";
import TimeWiseDisbursements from "../components/containers/billing/TimeWiseDisbursements";

const Billing = () => {
  return (
    <>
      <TotalAmountDisbursed />
      <TimeWiseDisbursements />
      {/*<BillingListIndex />*/}
    </>
  );
};

export default Billing;
