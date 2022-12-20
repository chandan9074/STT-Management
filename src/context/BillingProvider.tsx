import React, { createContext, useState } from "react";
import BillingService from "../services/billingService";
import {
  allBillingParamsDT,
  allBillingsDT,
  lastBillingParamsDT,
  lastBillingsDT,
  totalAmountDisbursedDT,
} from "../types/billingTypes";
import { data } from "autoprefixer";

interface ContextProps {
  loading: boolean;
  errorMsg: string;
  GetAmountDisbursed: () => void;
  handleAmountDropDown: (value: number) => void;
  amountDisbursed: totalAmountDisbursedDT | undefined;
  amountDropDown: number | undefined;

  GetAllBillingInfo: (data: allBillingParamsDT) => void;

  allBillings: allBillingsDT | undefined;
  GetLastBillingsInfo: (data: lastBillingParamsDT) => void;
  lastBillings: lastBillingsDT | undefined;
}

export const BillingContext = createContext({} as ContextProps);

const BillingProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [amountDisbursed, setAmountDisbursed] =
    useState<totalAmountDisbursedDT>();
  const [allBillings, setAllBillings] = useState<allBillingsDT | undefined>();
  const [lastBillings, setLastBillings] = useState<
    lastBillingsDT | undefined
  >();
  const [amountDropDown, setAmountDropDown] = useState<number>();

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

  const GetAllBillingInfo = async (data: allBillingParamsDT) => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    const response = await BillingService.allBillingInfo(data);
    setAllBillings(response.data);
    setLoading(false);
  };

  const GetLastBillingsInfo = async (data: lastBillingParamsDT) => {
    setLoading(true);
    setErrorMsg("");
    // fetch data from api
    const response = await BillingService.lastBillingInfo(data);

    setLastBillings(response.data);
    setLoading(false);
  };

  return (
    <BillingContext.Provider
      value={{
        loading,
        errorMsg,
        GetAmountDisbursed,
        amountDisbursed,
        GetAllBillingInfo,
        allBillings,
        GetLastBillingsInfo,
        lastBillings,
        handleAmountDropDown,
        amountDropDown,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
