import React, { createContext, useState } from "react";
import UserManagementService from "../services/userManagement";
import { activityDT } from "../types/userManagementTypes";

interface ContextProps {
    activityStatistics: activityDT | undefined
    getActivityStatistics: (id: string) => void;
    activeRole: string;
    setActiveRole: React.Dispatch<React.SetStateAction<string>>;
    //   setModalData: React.Dispatch<React.SetStateAction<string>>;
}

export const UserManagementContext = createContext({} as ContextProps);

const UserManagementProvider = ({ children }: { children: any }) => {
    const [activityStatistics, setActivityStatistics] = useState<activityDT | undefined>();
    const [activeRole, setActiveRole] = useState<string>("")


    const getActivityStatistics = (id: string) => {
        const res = UserManagementService.getActivityStatistics(id);
        setActivityStatistics(res);
        setActiveRole(res.roleList[0])
    }


    return (
        <UserManagementContext.Provider
            value={{ activityStatistics, getActivityStatistics, activeRole, setActiveRole }}
        >
            {children}
        </UserManagementContext.Provider>
    );
};

export default UserManagementProvider;
