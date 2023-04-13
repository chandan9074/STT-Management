export type RoleDataDT = {
    id: string
    role: string
    roleName: string
    lastDate: string
} 

export type TagDataDT = {
    id: string
    tagName: string
    shortcut: string
    description: string
}

export type DevcieDataDT = {
    id: string
    device: string
    brand: string
    model: string
    lastDateCreation: string
    lastDateModification: string
}

export type roleParamDT = {
    role: string;
    description: string;
}