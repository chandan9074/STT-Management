import React, { createContext, useState } from "react";
import BillingService from "../services/billingService";
import { totalAmountDisbursedDT } from "../types/billingTypes";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  GetAmountDisbursed: () => void;
  amountDisbursed: totalAmountDisbursedDT | undefined;
}

export const BillingContext = createContext({} as ContextProps);

const BillingProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [amountDisbursed, setAmountDisbursed] =
    useState<totalAmountDisbursedDT>();

  const GetAmountDisbursed = async () => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    const response = BillingService.amountDisbursed();
    setAmountDisbursed(response);
    setLoading(false);
  };

  return (
    <BillingContext.Provider
      value={{
        loading,
        errorMsg,
        GetAmountDisbursed,
        amountDisbursed,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
