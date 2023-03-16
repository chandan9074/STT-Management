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
    reportingTo: string,
    adminData: adminDataDT,

}

export type userPersonalInformationDt = {
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
    reportingTo: string,
    adminData: adminDataDT,

}

export type adminDataDT = {
    id: string,
    name: string,
    number: string
}