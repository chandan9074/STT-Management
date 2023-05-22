import React, { createContext, useState } from "react";
import UserManagementService from "../services/userManagementService";
import { targetSpeechDT } from "../types/assignTypes";
import { activityDT, activityQueryParamsDT, getUserByIdParamsDT, userInfoDT, userManagementDT, userManagementParamsDT } from "../types/userManagementTypes";
import { roleDT } from "../types/billingTypes";
import { callingToast } from "../helpers/Utils";

interface ContextProps {
    activityStatistics: activityDT | undefined
    getActivityStatistics: (value: activityQueryParamsDT) => void;
    activeRole: string;
    setActiveRole: React.Dispatch<React.SetStateAction<string>>;
    currentWeek: number;
    setCurrentWeek: React.Dispatch<React.SetStateAction<number>>;
    getUserTargetPendingSpeeches: (id: string) => void;
    targetPendingSpeeches: targetSpeechDT;
    getUserManagementTable: (values: userManagementParamsDT) => void;
    userManagementTable: userManagementDT;
    getUserRoleListByRole: (role: string) => void;
    roleList: string[];
    selectedFieldOutline: string;
    setSelectedFieldOutline: React.Dispatch<React.SetStateAction<string>>;
    queryParams: userManagementParamsDT;
    setQueryParams: React.Dispatch<React.SetStateAction<userManagementParamsDT>>;
    activityQueryParams: activityQueryParamsDT;
    setActivityQueryParams: React.Dispatch<React.SetStateAction<activityQueryParamsDT>>;
    createUser: (data: FormData) => void,
    newRoleList: string[]
    userData: userInfoDT;
    setUserData: React.Dispatch<React.SetStateAction<userInfoDT>>;
    getUserById: (id: getUserByIdParamsDT) => void,
    updateUser: (data: FormData) => void
}

export const UserManagementContext = createContext({} as ContextProps);

const UserManagementProvider = ({ children }: { children: any }) => {
    const [activityStatistics, setActivityStatistics] = useState<activityDT | undefined>();
    const [activeRole, setActiveRole] = useState<string>("")
    const [currentWeek, setCurrentWeek] = useState<number>(1);
    const [targetPendingSpeeches, setTargetPendingSpeeches] = useState<targetSpeechDT>({} as targetSpeechDT);
    const [userManagementTable, setUserManagementTable] = useState<userManagementDT>({} as userManagementDT)
    const [roleList, setRoleList] = useState<string[]>([] as string[]);
    const [selectedFieldOutline, setSelectedFieldOutline] = useState<string>("");
    const [newRoleList, setNewRoleList] = useState<string[]>([] as string[]);
    const [userData, setUserData] = useState<userInfoDT>({} as userInfoDT)


    const [queryParams, setQueryParams] = useState<userManagementParamsDT>({
        page: 1,
        pageSize: 10,
        role: "Admin",
        status: "",
        reportingTo: "",
        district: "",
        gender: "",
    })
    const [activityQueryParams, setActivityQueryParams] = useState<activityQueryParamsDT>({
        id: "",
        role: "",
        year: new Date().getFullYear(),
        month: new Date().toLocaleString('default', { month: 'long' }),
    })

    const updateUser = async (params: FormData) => {
        try {
            //   setLoading(true);
            await UserManagementService.updateUser(params);
            //   setLoading(false);
            callingToast("Script updated successfully");
            //   getAllScript({ role: commonContext?.role });
        } catch (error) {
            //   setLoading(false);

        }
    }

    const getUserById = async (id: getUserByIdParamsDT) => {
        try {
            const response = await UserManagementService.getUserById(id);
            setUserData(response?.data);
            //   setScriptModule(response?.data?.module)
        } catch (error) {
        }
    }

    const createUser = async (params: FormData) => {
        try {
            const response = await UserManagementService.createUser(params);
            callingToast("User created successfully");
            //   getAllScript({ role: commonContext?.role });
            return {
                message: response?.data?.message,
                status: response?.status
            }
        } catch (error) {

        }
    }


    const getActivityStatistics = async (value: activityQueryParamsDT) => {
        const res = await UserManagementService.getActivityStatistics(value);
        setActivityStatistics(res.data);
        console.log(res.data, "res.data from provider")
        setActiveRole(res.data.roleList[0])
    }

    const getUserTargetPendingSpeeches = async (id: string) => {
        const res = UserManagementService.getUserTargetPendingSpeeches(id);
        // setPendingSpeeches(res.data);
        setTargetPendingSpeeches(res);
    }

    const getUserManagementTable = async (values: userManagementParamsDT) => {
        const res = await UserManagementService.getUserManagementTable(values);
        console.log(res.data, "res.data")
        setUserManagementTable(res.data);
    }

    const getUserRoleListByRole = async (role: string) => {
        const res = await UserManagementService.getUserRoleListByRole(role);
        const concatenatedStrings = res.data.map((item: roleDT) => item.id + " - " + item.name);
        setRoleList(concatenatedStrings);
        setNewRoleList(res.data)

    }

    return (
        <UserManagementContext.Provider
            value={{
                activityStatistics,
                getActivityStatistics,
                activeRole,
                setActiveRole,
                currentWeek,
                setCurrentWeek,
                getUserTargetPendingSpeeches,
                targetPendingSpeeches,
                getUserManagementTable,
                userManagementTable,
                getUserRoleListByRole,
                roleList,
                selectedFieldOutline,
                setSelectedFieldOutline,
                queryParams,
                setQueryParams,
                activityQueryParams,
                setActivityQueryParams,
                createUser,
                newRoleList,
                getUserById,
                setUserData,
                userData,
                updateUser
            }}
        >
            {children}
        </UserManagementContext.Provider>
    );
};

export default UserManagementProvider;
