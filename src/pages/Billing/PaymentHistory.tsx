import React, { useContext, useEffect, useState } from "react";
import PaymentHistoryDetails from "../../components/containers/billing/PaymentHistoryDetails";
import Layouts from "../../components/Layouts";
import { BillingContext } from "../../context/BillingProvider";
import { useParams } from "react-router-dom";
import { LoadingSkeleton } from "../../assets/loadingSkeleton";
const PaymentHistory = () => {
  const billingContext = useContext(BillingContext);
  const { id } = useParams<{ id: string }>();
  console.log("id", id);

  useEffect(() => {
    if (id !== undefined) {
      billingContext.setQuery({ ...billingContext.query, id: id });
      if (billingContext.query.id !== "") {
        billingContext.GetBillingPaymentHistoryData(billingContext.query);
      }
    }
  }, [
    id,
    billingContext.query.id,
    billingContext.query.end,
    billingContext.query.start,
    billingContext.query.module,
    billingContext.query.page,
    billingContext.query.pageSize,
  ]);
  return (
    <Layouts.Default>
      <div className="min-h-[calc(100vh-9.5vh)]">
        {billingContext.paymentHistory ? (
          <PaymentHistoryDetails data={billingContext.paymentHistory} />
        ) : (
          <>
            <img src={LoadingSkeleton.paymentHistoryHeader} alt="" />
            <img
              src={LoadingSkeleton.paymentHistoryBody}
              alt=""
              className="w-full h-[calc(100vh-14.5vh)]"
            />
          </>
        )}
      </div>
    </Layouts.Default>
  );
};

export default PaymentHistory;
