export type RoleDataDT = {
    id: string
    role: string
    description: string
    createdAt:string
    lastDate: string
} 

export type TagDataDT = {
    id: string
    tagName: string
    shortCut: string
    description: string
    createdAt:string
    lastDate: string
}

export type DevcieDataDT = {
    id: string
    device: string
    brand: string
    model: string
    createdAt:string
    lastDate: string
}

export type roleParamDT = {
    role: string;
    description: string;
}

export type roleBodyDT = {
    role: string;
    description: string;
}

