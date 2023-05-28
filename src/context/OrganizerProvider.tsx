import React, { createContext, useState } from 'react';
import OrganizerService from '../services/ organizerService';
import { DevcieDataDT, RoleDataDT, TagDataDT, roleBodyDT, roleParamDT } from '../types/organizerTypes';
import { callingToast } from '../helpers/Utils';

interface ContextProps {
    createScript: (params: roleParamDT) => void;
    getRole: () => void;
    postRole: (body: roleBodyDT) => void;
    deleteRole: (id: string) => void;
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

    const postRole = async (body: roleBodyDT) => {
        const res = await OrganizerService.postRole(body);
        if (res.status === 200) {
            callingToast("A role has been created")
            getRole()
        }
    }

    const deleteRole = async (id: string) => {
        console.log("andaje", id);

        const res = await OrganizerService.deleteRole(id);
        if (res.status === 200) {
            callingToast("Role has been deleted")
            getRole()
        }
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
                    postRole,
                    deleteRole,
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