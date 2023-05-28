import React, { createContext, useState } from 'react';
import OrganizerService from '../services/ organizerService';
import { DevcieDataDT, RoleDataDT, TagDataDT, roleParamDT } from '../types/organizerTypes';

interface ContextProps {
    createScript: (params: roleParamDT) => void;
    getRole: () => void;
    roleData: RoleDataDT[];
    getTag: () => void;
    tagData: TagDataDT[];
    getDevice: () => void;
    deviceData: DevcieDataDT[];
}

export const OrganizerContext = createContext({} as ContextProps);
const OrganizerProvider = ({ children }: { children: any }) => {

    const [roleData, setRoleData] = useState<RoleDataDT[]>([] as RoleDataDT[]);
    const [tagData, setTagData] = useState<TagDataDT[]>([] as TagDataDT[]);
    const [deviceData, setDeviceData] = useState<DevcieDataDT[]>([] as DevcieDataDT[]);


    const createScript = async (params: roleParamDT) => {
        try {
            const response = await OrganizerService.createRole(params);
            return {
                message: response?.data?.message,
                status: response?.status
            }
        } catch (error) {

        }
    }

    const getRole = async () => {
        const res = await OrganizerService.getRole();
        setRoleData(res.data);
    }

    const getTag = async () => {
        const res = await OrganizerService.getTag();
        setTagData(res.data);
    }

    const getDevice = async () => {
        const res = await OrganizerService.getDevice();
        setDeviceData(res.data);
    }

    return (
        <div>
            <OrganizerContext.Provider
                value={{
                    createScript,
                    getRole,
                    roleData,
                    getTag,
                    tagData,
                    getDevice,
                    deviceData,
                }}
            >
                {children}
            </OrganizerContext.Provider>
        </div>
    );
};

export default OrganizerProvider;