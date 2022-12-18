import React from "react";
import PaymentHistoryDetails from "../../components/containers/billing/PaymentHistoryDetails";
import { paymentHistory } from "../../data/billing/paymentHistory";

const PaymentHistory = () => {
  return (
    <div className="min-h-[calc(100vh-9.5vh)]">
      <PaymentHistoryDetails data={paymentHistory} />
    </div>
  );
};

export default PaymentHistory;
