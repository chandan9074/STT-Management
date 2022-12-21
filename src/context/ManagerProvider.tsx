import React, {createContext, useState} from 'react';
import TimeWiseDisbursementService from "../services/TimeWiseDisbursementService";
import {
    roleDT,
    roleParamsDT,
    timeWiseDisbursementDT,
    timeWiseDisbursementParamsDT,
    timeWiseYearDT
} from "../types/billingTypes";

interface ContextProps {
    loading: boolean;
    disbursementData: timeWiseYearDT[] | undefined;
    getManagerDisbursement: (data: timeWiseDisbursementParamsDT) => void;
    singleManager: roleDT | undefined;
    managerLoading: boolean;
    getManagerById: (id: string) => void;
    getManager: (data: roleParamsDT) => void;
    managerDatas: roleDT[] | undefined;
    deleteManager: (id: string) => void;
    totalDisbursed: timeWiseDisbursementDT | undefined
}

export const ManagerContext = createContext({} as ContextProps);
const ManagerProvider = ({ children }: { children: any }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [disbursementData, setDisbursementData] = useState<timeWiseYearDT[] | undefined>();
    const [managerDatas, setManagerDatas] = useState<roleDT[] | undefined>();
    const [singleManager, setSingleManager] = useState<roleDT | undefined>();
    const [managerLoading, setManagerLoading] = useState<boolean>(true);
    const [totalDisbursed, setTotalDisbursed] = useState<timeWiseDisbursementDT | undefined>()

    const getManagerDisbursement = async (data: timeWiseDisbursementParamsDT) => {
        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.getManagerDisbursement(data);
            setDisbursementData(res?.data?.data);
            // setDisbursementData(res?.data);
            setTotalDisbursed(res?.data);
            // setTotalDisbursed(res);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error);
            // Toast("error", "Error", message);

        }
    }

    const getManager = async (data: roleParamsDT) => {
        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.getManager(data);
            setManagerDatas(res)
            // setManagerData('This is manager data')
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error);
            // Toast("error", "Error", message);

        }
    }

    const getManagerById = async (id: string) => {
        try {
            setManagerLoading(true);
            const response = await TimeWiseDisbursementService.getManagerById(id);
            setSingleManager(response[0]);
            setManagerLoading(false);
        } catch (error) {
            setManagerLoading(false);
            // Toast("error", "Error", getErrorMessage(error));
        }
    }

    const deleteManager = async (id: string) => {
        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.deleteManager(id);
            setManagerDatas(res);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error);
            // Toast("error", "Error", message);

        }
    }

    return (
        <ManagerContext.Provider
            value={{
                loading,
                disbursementData,
                getManagerDisbursement,
                singleManager,
                managerLoading,
                getManagerById,
                getManager,
                managerDatas,
                deleteManager,
                totalDisbursed
            }}
        >
            {children}
        </ManagerContext.Provider>
    );
};

export default ManagerProvider;