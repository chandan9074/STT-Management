import React, { createContext, useState } from "react";
import UserManagementService from "../services/userManagement";
import { targetSpeechDT } from "../types/assignTypes";
import { activityDT, userManagementTableDT } from "../types/userManagementTypes";
import { roleDT } from "../types/billingTypes";

interface ContextProps {
    activityStatistics: activityDT | undefined
    getActivityStatistics: (id: string) => void;
    activeRole: string;
    setActiveRole: React.Dispatch<React.SetStateAction<string>>;
    currentWeek: number;
    setCurrentWeek: React.Dispatch<React.SetStateAction<number>>;
    getUserTargetPendingSpeeches: (id: string) => void;
    targetPendingSpeeches: targetSpeechDT;
    getUserManagementTable: () => void;
    userManagementTable: userManagementTableDT[];
    getUserRoleListByRole: (role: string) => void;
    roleList: string[];
    selectedFieldOutline: string;
    setSelectedFieldOutline: React.Dispatch<React.SetStateAction<string>>;
}

export const UserManagementContext = createContext({} as ContextProps);

const UserManagementProvider = ({ children }: { children: any }) => {
    const [activityStatistics, setActivityStatistics] = useState<activityDT | undefined>();
    const [activeRole, setActiveRole] = useState<string>("")
    const [currentWeek, setCurrentWeek] = useState<number>(1);
    const [targetPendingSpeeches, setTargetPendingSpeeches] = useState<targetSpeechDT>({} as targetSpeechDT);
    const [userManagementTable, setUserManagementTable] = useState<userManagementTableDT[]>([] as userManagementTableDT[])
    const [roleList, setRoleList] = useState<string[]>([] as string[])
    const [selectedFieldOutline,setSelectedFieldOutline] = useState<string>("")


    const getActivityStatistics = (id: string) => {
        const res = UserManagementService.getActivityStatistics(id);
        setActivityStatistics(res);
        setActiveRole(res.roleList[0])
    }

    const getUserTargetPendingSpeeches = async (id: string) => {
        const res = UserManagementService.getUserTargetPendingSpeeches(id);
        // setPendingSpeeches(res.data);
        setTargetPendingSpeeches(res);
    }

    const getUserManagementTable = () => {
        const res = UserManagementService.getUserManagementTable();
        setUserManagementTable(res);
    }

    const getUserRoleListByRole = async (role: string) => {
        const res = await UserManagementService.getUserRoleListByRole(role);
        const concatenatedStrings = res.data.map((item: roleDT) => item.id + " - " + item.name);
        setRoleList(concatenatedStrings);
    }


    return (
        <UserManagementContext.Provider
            value={{ activityStatistics, getActivityStatistics, activeRole, setActiveRole, currentWeek, setCurrentWeek, getUserTargetPendingSpeeches, targetPendingSpeeches, getUserManagementTable, userManagementTable, getUserRoleListByRole, roleList, selectedFieldOutline,setSelectedFieldOutline }}
        >
            {children}
        </UserManagementContext.Provider>
    );
};

export default UserManagementProvider;
