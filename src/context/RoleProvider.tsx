import { createContext, useState } from 'react';
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
    // getManagerById: (id: string) => void;
    getManager: (data: roleParamsDT) => void;
    roleDatas: roleDT[] | undefined;
    // deleteManager: (id: string) => void;
    totalDisbursed: timeWiseDisbursementDT | undefined
}

export const RoleInContext = createContext({} as ContextProps);
const RoleProvider = ({ children }: { children: any }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [disbursementData, setDisbursementData] = useState<timeWiseYearDT[] | undefined>();
    const [roleDatas, setRoleDatas] = useState<roleDT[] | undefined>();
    const [totalDisbursed, setTotalDisbursed] = useState<timeWiseDisbursementDT | undefined>()

    const getManagerDisbursement = async (data: timeWiseDisbursementParamsDT) => {

        try {
            setLoading(true);
            const res = await TimeWiseDisbursementService.getManagerDisbursement(data);
            setDisbursementData(res.data.data);
            // setDisbursementData(res?.data);
            setTotalDisbursed(res.data);
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
            const res = await TimeWiseDisbursementService.getManager(data);
            setRoleDatas(res.data)

        } catch (error) {

        }
    }


    return (
        <RoleInContext.Provider
            value={{
                loading,
                disbursementData,
                getManagerDisbursement,
                getManager,
                roleDatas,
                totalDisbursed
            }}
        >
            {children}
        </RoleInContext.Provider>
    );
};

export default RoleProvider;