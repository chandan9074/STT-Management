import React, { createContext, useContext, useState } from "react";
import BillingService from "../services/billingService";
import { CommonContext } from "./CommonProvider";
import {
  allBillingParamsDT,
  allBillingsDT, lastBillingParamsDT,
  lastBillingsDT,
  paymentHistoryDT,
  paymentHistoryParamsDT,
  totalAmountDisbursedDT
} from "../types/billingTypes";

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
  GetBillingExcelData: (data: any) => void;
  lastBillingsExcelData: any;
  GetBillingPaymentHistoryData: (data: paymentHistoryParamsDT) => void;
  paymentHistory: paymentHistoryDT | undefined;
  query: {
    page: number;
    pageSize: number;
    id: string;
    start: string;
    end: string;
    module: string;
  };
  setQuery: React.Dispatch<
    React.SetStateAction<{
      page: number;
      pageSize: number;
      id: string;
      start: string;
      end: string;
      module: string;
    }>
  >;
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
  const [lastBillingsExcelData, setLastBillingsExcelData] = useState<any>([]);
  const [paymentHistory, setPaymentHistory] = useState<
    paymentHistoryDT | undefined
  >();
  const commonContext = useContext(CommonContext);
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 6,
    id: "",
    start: "",
    end: "",
    module: commonContext.type,
  });

  const GetAmountDisbursed = async () => {
    try {
      setLoading(true);
      setErrorMsg("");
      // fetch data from api
      const response = await BillingService.amountDisbursed();
      setAmountDisbursed(response.data);
      setAmountDropDown(response.data.yearList[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleAmountDropDown = (value: number) => {
    setAmountDropDown(value);
  };
  const GetAllBillingInfo = async (data: allBillingParamsDT) => {
    try {
      setLoading(true);
      setErrorMsg("");
      // fetch data from api
      const response = await BillingService.allBillingInfo(data);
      setAllBillings(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const GetLastBillingsInfo = async (data: lastBillingParamsDT) => {
    try {
      setLoading(true);
      setErrorMsg("");
      // fetch data from api
      const response = await BillingService.lastBillingInfo(data);

      setLastBillings(response.data);
      GetBillingExcelData(response.data.billingInfo);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const GetBillingExcelData = (data: any) => {
    setLastBillingsExcelData(
      data?.map((lastBilling: any) => {
        return {
          name: `${lastBilling?.userInfo?.name}(${lastBilling?.userInfo?.name})`,
          hour: lastBilling?.hour,
          paidAmount: lastBilling?.amountPaid,
        };
      })
    );
  };

  const GetBillingPaymentHistoryData = async (data: paymentHistoryParamsDT) => {
    try {
      setLoading(true);
      setErrorMsg("");
      // fetch data from api
      const response = await BillingService.paymentHistory(data);
      setPaymentHistory(response.data);
      // setLastBillings(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
        GetBillingExcelData,
        handleAmountDropDown,
        lastBillingsExcelData,
        amountDropDown,
        GetBillingPaymentHistoryData,
        paymentHistory,
        query,
        setQuery,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};

export default BillingProvider;
