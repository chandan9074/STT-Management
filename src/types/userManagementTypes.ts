export type homeDistrictTypes = {
    division: string,
    district: string[]
}

export type activityDT = {
    name: string,
    email: string,
    phone: string,
    address: string,
    PrimaryRole: string,
    roleList: string[],
    roleData: roleDataDT[]
}

export type roleDataDT = {
    name: string,
    target: number,
    received: number,
    audios: number,
    audioStatus: audioStatusDT[]
}

export type audioStatusDT = {
    name: string,
    hour: number
}