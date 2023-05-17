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
    roleData: roleDataDT
}

export type roleDataDT = {
    name: string,
    target: number,
    received: number,
    audios: number,
    audioStatus: audioStatusDT[],
    localityData: localityDataDT[],
    overTheTimeData: overTheTimeDataDT,
}

export type audioStatusDT = {
    name: string,
    hour: number
}

export type localityDataDT = {
    id: string,
    name: string,
    collected: number,
    duration: number,
    speaker: number,
    lastUpdate: string
}

export type overTheTimeDataDT = {
    id: string,
    year: number,
    month: string,
    weekData: weekDataDT[]
}

export type weekDataDT = {
    id: string,
    week: number,
    maxTarget: number,
    dayData: dayDataDT[]
}

export type dayDataDT = {
    day: string,
    target: number,
    uploaded: number,
    pending: number,
    deadline: string,
    status: string
}

export type userSpeakerDt = {
    id?: string,
    role: string[],
    speakersName: string,
    gender: string,
    dateOfBirth: string,
    ageRange: string,
    education: string,
    educationSituation: string,
    childhoodPlace: string,
    district: string,
    upazilaCity: string,
    villageArea: string,
    smoking: string,
    stutter: string,
    hearingStatus: string,
    cvFile: string,
    cvFileName: string,
    reportingTo: string,
    adminData: adminDataDT,

}

export type userRoleInformationDt = {
    id?: string,
    role: string[],
    primaryRole: string,
    name: string,
    email: string,
    mobileNumber: string,
    nid: string,
    birthRegNumber: string,
    homeDistrict: string,
    presentDistrict: string,
    lastDegreeAchived: string,
    subjectInStudy: string,
    cvFile: string,
    cvFileName: string,
    reportingTo: string,
    adminData: adminDataDT,
}

export type adminDataDT = {
    id: string,
    name: string,
    number: string
}

export type userManagementDT = {
    total_data_size: number;
    data: userManagementTableDT[];
}

export type userManagementTableDT = {
    id: string;
    name: string;
    role: string[];
    primaryRole: string;
    email: string;
    userId: string;
    password: string;
    mobileNumber: string;
    presentDistrict: string;
    homeDistrict: string;
    education: string;
    status: string;
    reportingTo: reportingToDT
    reportingChannel: reportingToDT[]
}

export type reportingToDT = {
    name: string;
    role: string;
}

export type userManagementParamsDT = {
    page: number,
    pageSize: number,
    role: string,
    status: string,
    reportingTo: string,
    district: string,
    gender: string,
}

export type activityQueryParamsDT = {
    id: string,
    role: string,
}