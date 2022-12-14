import React from "react";
import TotalAmountDisbursed from "../components/containers/billing/TotalAmountDisbursed";
import BillingListIndex from "../components/containers/billing/BillingList/BillingListIndex";

const Billing = () => {
  return (
    <>
      <TotalAmountDisbursed />
        <BillingListIndex/>
    </>
  );
};

export default Billing;
