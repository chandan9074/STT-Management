import React from "react";
import PaymentHistoryDetails from "../../components/containers/billing/PaymentHistoryDetails";
import Layouts from "../../components/Layouts";
import { paymentHistory } from "../../data/billing/paymentHistory";

const PaymentHistory = () => {
  return (
    <Layouts.Default>
      <div className="min-h-[calc(100vh-9.5vh)]">
        <PaymentHistoryDetails data={paymentHistory} />
      </div>
    </Layouts.Default>
  );
};

export default PaymentHistory;
