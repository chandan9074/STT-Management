import React, {createContext, useState} from 'react';
import TimeWiseDisbursementService from "../services/TimeWiseDisbursementService";

interface ContextProps {
    loading: boolean;
    disbursementData: any;
    getManagerDisbursement: any;
    singleManager: any;
    managerLoading: any;
    getManagerById: any;
    getManager: any;
    managerDatas: any,
    deleteManager: any
    setSingleManager: any,
    totalDisbursed: any
}

export const ManagerContext = createContext({} as ContextProps);
const ManagerProvider = ({ children }: { children: any }) => {
    const [loading, setLoading] = useState(true);
    const [disbursementData, setDisbursementData] = useState<any>([]);
    const [managerDatas, setManagerDatas] = useState<any>([]);
    const [singleManager, setSingleManager] = useState<any>({});
    const [managerLoading, setManagerLoading] = useState(true);
    const [totalDisbursed, setTotalDisbursed] = useState<any>([])

    const getManagerDisbursement = async (data: any) => {
        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.getManagerDisbursement(data);
            // setDisbursementData(res?.data?.data);
            setDisbursementData(res?.data);
            // setTotalDisbursed(res?.data);
            setTotalDisbursed(res);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error);
            // Toast("error", "Error", message);

        }
    }

    const getManager = async (data: any) => {
        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.getManager(data);
            setManagerDatas(res.data)
            // setManagerData('This is manager data')
            setLoading(false);

        } catch (error) {
            setLoading(false);
            // const message = getErrorMessage(error);
            // Toast("error", "Error", message);

        }
    }

    const getManagerById = async (id: any) => {
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

    const deleteManager = async (id: any) => {
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
                setSingleManager,
                totalDisbursed
            }}
        >
            {children}
        </ManagerContext.Provider>
    );
};

export default ManagerProvider;