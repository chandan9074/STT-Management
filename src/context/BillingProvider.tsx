import React, { createContext, useState } from "react";
import BillingService from "../services/billingService";
import { totalAmountDisbursedDT } from "../types/billingTypes";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  GetAmountDisbursed: () => void;
  handleAmountDropDown: (value: number) => void;
  amountDisbursed: totalAmountDisbursedDT | undefined;
  amountDropDown: number | undefined;
}

export const BillingContext = createContext({} as ContextProps);

const BillingProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [amountDropDown, setAmountDropDown] = useState<number>();
  const [amountDisbursed, setAmountDisbursed] =
    useState<totalAmountDisbursedDT>();

  const GetAmountDisbursed = async () => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    const response = await BillingService.amountDisbursed();
    // console.log("response", response.data);
    setAmountDisbursed(response.data);
    setAmountDropDown(response.data.yearList[0]);
    setLoading(false);
  };

  const handleAmountDropDown = (value: number) => {
    setAmountDropDown(value);
  };

  return (
    <BillingContext.Provider
      value={{
        loading,
        errorMsg,
        GetAmountDisbursed,
        amountDisbursed,
        handleAmountDropDown,
        amountDropDown,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
