import React, {createContext, useState} from 'react';
import ManagerService from "../services/ManagerService";

interface ContextProps {
    loading: boolean;
    errorMsg: string;
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
    const [errorMsg, setErrorMsg] = useState("");
    const [disbursementData, setDisbursementData] = useState<any>([]);
    const [managerDatas, setManagerDatas] = useState<any>([]);
    const [singleManager, setSingleManager] = useState<any>({});
    const [managerLoading, setManagerLoading] = useState(true);
    const [totalDisbursed, setTotalDisbursed] = useState<any>([])

    const getManagerDisbursement = async (data: any) => {
        try {
            setLoading(true);
            const res = await ManagerService.getManagerDisbursement(data);
            setDisbursementData(res.data.disbursementData[0]);
            setTotalDisbursed(res.data);
            // setManagerData('This is manager data')
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
            const res = await ManagerService.getManager(data);
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
            const response = await ManagerService.getManagerById(id);
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
            const res = await ManagerService.deleteManager(id);
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
                errorMsg,
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