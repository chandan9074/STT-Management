import React, {createContext, useState} from "react";
import BillingService from "../services/billingService";
import {
    allBillingParamsDT,
    allBillingsDT,
    lastBillingParamsDT,
    lastBillingsDT,
    totalAmountDisbursedDT
} from "../types/billingTypes";

interface ContextProps {
    loading: boolean;
    errorMsg: string;
    GetAmountDisbursed: () => void;
    amountDisbursed: totalAmountDisbursedDT | undefined;

    GetAllBillingInfo: (data: allBillingParamsDT) => void;

    allBillings: allBillingsDT | undefined;
    GetLastBillingsInfo: (data: lastBillingParamsDT) => void;
    lastBillings: lastBillingsDT | undefined;
    GetBillingExcelData: (data: any) => void;
    lastBillingsExcelData: any;
}

export const BillingContext = createContext({} as ContextProps);

const BillingProvider = ({children}: { children: any }) => {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const [amountDisbursed, setAmountDisbursed] =
        useState<totalAmountDisbursedDT>();
    const [allBillings, setAllBillings] = useState<allBillingsDT | undefined>()
    const [lastBillings, setLastBillings] = useState<lastBillingsDT | undefined>()
    const [lastBillingsExcelData, setLastBillingsExcelData] = useState<any>([])

    const GetAmountDisbursed = async () => {
        setLoading(true);
        setErrorMsg("");
        // fetch data from api
        const response = BillingService.amountDisbursed();
        setAmountDisbursed(response);
        setLoading(false);
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
        GetBillingExcelData(response.data.billingInfo);
        setLoading(false);
    }

    const GetBillingExcelData = (data: any) => {
        console.log("Context", data);
        setLastBillingsExcelData(data?.map((lastBilling: any) => {
            return {
                name: `${lastBilling?.manager?.name}(${lastBilling?.manager?.name})`,
                hour: lastBilling?.hour,
                paidAmount: lastBilling?.amountPaid
            }
        }))
    }

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
                lastBillingsExcelData
            }}
        >
            {children}
        </BillingContext.Provider>
    );
};

export default BillingProvider;