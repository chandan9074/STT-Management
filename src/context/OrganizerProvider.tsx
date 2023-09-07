import React, { createContext, useState } from 'react';
import OrganizerService from '../services/ organizerService';
import { DeviceDataDT, RoleDataDT, TagDataDT, deviceBodyDT, roleBodyDT, roleParamDT, tagBodyDT } from '../types/organizerTypes';
import { callingToast } from '../helpers/Utils';

interface ContextProps {
    createScript: (params: roleParamDT) => void;
    getRole: () => void;
    postRole: (body: roleBodyDT) => void;
    updateRole: (body: roleBodyDT) => void;
    deleteRole: (id: string) => void;
    roleData: RoleDataDT[];
    getTag: () => void;
    postTag: (body: tagBodyDT) => void;
    updateTag: (body: tagBodyDT) => void;
    deleteTag: (id: string) => void;
    tagData: TagDataDT[];
    getDevice: () => void;
    postDevice: (body: deviceBodyDT) => void;
    updateDevice: (body: deviceBodyDT) => void;
    deleteDevice: (id: string) => void;
    deviceData: DeviceDataDT[];
}

export const OrganizerContext = createContext({} as ContextProps);
const OrganizerProvider = ({ children }: { children: any }) => {

    const [roleData, setRoleData] = useState<RoleDataDT[]>([] as RoleDataDT[]);
    const [tagData, setTagData] = useState<TagDataDT[]>([] as TagDataDT[]);
    const [deviceData, setDeviceData] = useState<DeviceDataDT[]>([] as DeviceDataDT[]);


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

    const updateRole = async (body: roleBodyDT) => {
        const res = await OrganizerService.updateRole(body);
        if (res.status === 200) {
            callingToast("A role has been updated")
            getRole()
        }
    }

    const deleteRole = async (id: string) => {

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

    const postTag = async (body: tagBodyDT) => {
        const res = await OrganizerService.postTag(body);
        if (res.status === 200) {
            callingToast("A role has been created")
            getTag()
        }
    }

    const updateTag = async (body: tagBodyDT) => {
        const res = await OrganizerService.updateTag(body);
        if (res.status === 200) {
            callingToast("A tag has been updated")
            getTag()
        }
    }

    const deleteTag = async (id: string) => {
        const res = await OrganizerService.deleteTag(id);
        if (res.status === 200) {
            callingToast("Tag has been deleted")
            getTag()
        }
    }

    const getDevice = async () => {
        const res = await OrganizerService.getDevice();
        setDeviceData(res.data);
    }

    const postDevice = async (body: deviceBodyDT) => {
        const res = await OrganizerService.postDevice(body);
        if (res.status === 200) {
            callingToast("A device has been created")
            getDevice()
        }
    }

    const updateDevice = async (body: deviceBodyDT) => {
        const res = await OrganizerService.updateDevice(body);
        if (res.status === 200) {
            callingToast("A device has been updated")
            getDevice()
        }
    }

    const deleteDevice = async (id: string) => {
        const res = await OrganizerService.deleteDevice(id);
        if (res.status === 200) {
            callingToast("Device has been deleted")
            getDevice()
        }
    }

    return (
        <div>
            <OrganizerContext.Provider
                value={{
                    createScript,
                    getRole,
                    postRole,
                    updateRole,
                    deleteRole,
                    roleData,
                    getTag,
                    postTag,
                    updateTag,
                    deleteTag,
                    tagData,
                    getDevice,
                    postDevice,
                    updateDevice,
                    deleteDevice,
                    deviceData,
                }}
            >
                {children}
            </OrganizerContext.Provider>
        </div>
    );
};

export default OrganizerProvider;