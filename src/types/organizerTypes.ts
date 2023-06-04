export type RoleDataDT = {
    id: string
    role: string
    description: string
    createdAt: string
    lastDate: string
}

export type TagDataDT = {
    id: string
    tagName: string
    shortCut: string
    description: string
    createdAt: string
    lastDate: string
}

export type DeviceDataDT = {
    id: string
    device: string
    brand: string
    model: string
    createdAt: string
    lastDate: string
}

export type roleParamDT = {
    role: string;
    description: string;
}

export type roleBodyDT = {
    id?: string;
    role: string;
    description: string;
}

export type tagBodyDT = {
    id?: string;
    tagName: string;
    shortCut: string;
    description: string;
}

export type deviceBodyDT = {
    id?: string;
    deviceType: string;
    deviceName: string;
    model: string;
}

