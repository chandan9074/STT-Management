import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import { remarkDt, scriptResDT } from "./script";

export type collectedAudioDT = {
    total_data_size: number;
    data: audioManagementDT[];
}

export type audioManagementDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: scriptResDT;
    speaker: speakerLocalityDT2;
    remark: historyRemarkDT[];
    others: othersDT;
}

export type checkingStatusRootDT = {
    total_data_size: number;
    data: checkingStatusDT[];
}

export type checkingStatusDT = {
    id: string;
    deadline: string;
    speech: assignAudioTrackDT;
    script: scriptResDT;
    speaker: speakerLocalityDT2;
    audioChecker: audioCheckerDT;
    deadLine: string;
    remark: historyRemarkDT[];
    others: othersDT;
}

export type journeyDT = {
    role: audioManagementRoleDT[];
    speakers: {
        locality: string;
        roleTitle: string;
        role: journeySpeakersRoleDT[]
    };
    audioChecker?: journeyAudioCheckerDT
}

export type journeyDT2 = {
    role: audioManagementRoleDT[];
    speakers: {
        locality: string;
        roleTitle: string;
        role: journeySpeakersRoleDT[]
    };
    audioChecker: journeyAudioCheckerDT
}

export type journeyAudioCheckerDT = {
    id: string;
    locality: string;
    name: string;
    role: string;
    pickedDate: string;
}

export type journeySpeakersRoleDT = {
    id: string;
    name: string;
    gender: string;
}

export type audioManagementRoleDT = {
    id: string;
    role: string;
    name: string;
    date: string;
}

export type othersDT = {
    device: string;
    journey: journeyDT
}

export type speakerLocalityDT2 = {
    locality: string;
    speakers: singleSpeakerDT2[]
};

export type singleSpeakerDT2 = {
    id: string;
    name: string;
    role: string;
    gender: string;
    childhoodArea: string;
    age: string;
    profession: string;
    economicSituation: string;
    education: string;
    smokingHabit: string;
    hearingDisability: string;
    shutter: string;
    recordingArea: string;
    recordingDistance: string;
    note: string;
}

export type speakerLocalityDT = {
    locality?: string;
    speakers: singleSpeakerDT[]
};

export type singleSpeakerDT = {
    id: string;
    name: string;
    role: string;
    gender: string;
}

export type allCheckedAudioRootDt = {
    total_data_size: number;
    data: allCheckedAudioDT[];
}

export type allCheckedAudioDT = {
    id: string;
    deadline: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalityDT2;
    audioChecker: audioCheckerDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[];
    others: othersDT;
    history: historyDT[];
}

export type historyDT = {
    lastEdited: string;
    status: string;
    name: string;
    role: string;
    remark: historyRemarkDT[]
}

export type historyRemarkDT = {
    roleInfo: {
        id: string;
        name: string;
        role: string;
        gender: string;
    };
    deadline: string;
    des: string;
    status?: string;
}

export type audioCheckerDT = {
    status: string;
    name: string;
    role: string;
    locality: string;
    time: string;
}

export type remarkInfoDT = {
    roleInfo: roleDT;
    deadline?: string;
    des: string;
}

export type annotationRootDT = {
    total_data_size: number;
    data: annotationDT[];
}

export type annotationDT = {
    id: string;
    speech: assignAudioTrackDT
    script: scriptResDT
    speaker: speakerLocalityDT2
    wordAnnotation: boolean
    phonemeAnnotation: boolean
    deadLine: string
    remark: historyRemarkDT[]
    others: othersDT
}

export type collectAnnSenRootDT = {
    total_data_size: number;
    data: collectAnnSenDataDT[];
}

export type collectAnnSenDataDT = {
    id: string;
    speech: assignAudioTrackDT
    annotate: annotateInfoDT
    deadLine: string
    audioChecker: audioCheckerDT
    speaker: speakerLocalityDT2
    script: scriptResDT
    remark: historyRemarkDT[]
    others: othersDT
}

export type annotateInfoDT = {
    status: string;
    roleName: string;
    locality: string;
}

export type annotatedAnnotatorDT = {
    status: string;
    locality: string;
    time: string;
    annotator: annotatorRoleDt
}

export type annotatorRoleDt = {
    id: string;
    name: string;
    role: string;
    gender: string;
}

export type speakerLocalitySingleDT = {
    locality: string;
    speakers: singleSpeakerDT
};

export type annotatedAudioCheckerDT = {
    status: string;
    locality: string;
    time: string;
    name: string;
    role: string;
}

export type audioRoleDT = {
    id: string;
    name: string;
    role: string;
    gender: string;
}

export type annotatedFilesRootDT = {
    total_data_size: number;
    data: annotatedFilesDT[]
}

export type annotatedFilesDT = {
    id: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalityDT2;
    others: othersDT;
    history: historyDT[];
    audioChecker: annotatedAudioCheckerDT;
    annotator: annotatedAnnotatorDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[];
    // annotate: annotateInfoDT;
}

export type validatedFilesRootDT = {
    total_data_size: number;
    data: validatedFilesDT[]
}

export type validatedFilesDT = {
    id: string;
    speech: assignAudioTrackDT;
    validatorFinal: validatorDT;
    status: string;
    validator2: validatorDT;
    validator1: validatorDT;
    annotator: annotatedAnnotatorDT;
    audioChecker: audioCheckerDT;
    speaker: speakerLocalityDT2;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[]
    script: scriptResDT
    others: othersDT
    history: historyDT[]
}

// export type historyDT = {
//     id: string
//     lastEdited: string
//     status: string
//     name: string
//     role: string
//     remark: historyRemarkDT[]
// }

// export type historyRemarkDT = {
//     id: string
//     roleInfo: roleInfoDT
//     deadline: string
//     des: string
//     status: string
// }

export type roleInfoDT = {
    id: string
    name: string
    role: string
    gender: string
    date: string
}

export type validatorDT = {
    locality: string;
    time: string;
    name: string;
    role: string;
    gender: string;
}

export type collectValSenRootDT = {
    total_data_size: number;
    data: collectValSenDataDT[]
}


export type collectValSenDataDT = {
    id: string;
    speech: assignAudioTrackDT;
    validator1: validateDT;
    validator2: validateDT;
    validatorFinal: validateDT;
    deadLine: string;
    annotator: annotatedAnnotatorDT;
    audioChecker: annotatedAudioCheckerDT;
    speaker: speakerLocalityDT2;
    script: scriptResDT;
    remark: historyRemarkDT[];
    others: othersDT;
}

// export type speakerLocalitySingleDT = {
//     locality: string;
//     speakers: singleSpeakerDT
// };


// export type annotatedAudioCheckerDT = {
//     status: string;
//     locality: string;
//     time: string;
//     audioCheckers: audioRoleDT
// }

export type validateDT = {
    status: string;
    locality: string;
    // validators: audioRoleDT
    name: string;
    role: string;
    gender: string;
}

// export type audioRoleDT = {
//     id: string;
//     name: string;
//     role: string;
//     gender: string;
// }

// export type annotatedAnnotatorDT = {
//     status: string;
//     locality: string;
//     time: string;
//     annotator: annotatorRoleDt
// }

// export type annotatorRoleDt = {
//     id: string;
//     name: string;
//     role: string;
//     gender: string;
// }

export type uploadAudioRootDT = {
    total_data_size: number;
    data: uploadAudioDataDT[]
}

export type uploadAudioDataDT = {
    id: string;
    deadline: string;
    dataType: string;
    speech: assignAudioTrackDT;
    uploadDate: string;
    uploader: uploaderDT;
    domain: string;
    speechInfo: speechInfo
    others: othersUploadAudioDT;
    speaker: speakerUploadAudioDT;
}

export type speakerUploadAudioDT = {
    speakerNo: string;
    gender: string[];
    area: string;
    age: string[];
}

export type othersUploadAudioDT = {
    journey: journeyUploadAudioDT
}

export type journeyUploadAudioDT = {
    role: audioManagementRoleDT[];
}


export type speechInfo = {
    dataType: string;
    fileType: string;
    sourceType: string;
    sourceReference: string;
    dataSource: string;
    domain: string;
    subDomain: string;
}

export type uploaderDT = {
    role: string;
    name: string;
}

export type checkingStatusUploadRootDT = {
    total_data_size: number;
    data: checkingStatusUploadDataDT[]
}

export type checkingStatusUploadDataDT = {
    id: string;
    speech: assignAudioTrackDT;
    audioChecker: audioCheckerDT;
    deadLine: string;
    speechInfo: speechInfo
    others: othersUploadAudioDT;
    speaker: speakerUploadAudioDT;
    // remark: historyRemarkDT[]
}

export type allCheckedSpeechRootDT = {
    total_data_size: number;
    data: allCheckedSpeechDT[]
}

export type allCheckedSpeechDT = {
    id: string;
    speech: assignAudioTrackDT;
    audioChecker: audioCheckerDT;
    status: string;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[];
    speechInfo: speechInfo
    others: othersUploadAudioDT;
    speaker: speakerUploadAudioDT;
    history: historyDT[];
}

export type annotationUploadRootDT = {
    total_data_size: number;
    data: annotationUploadDT[]
}

export type annotationUploadDT = {
    id: string;
    speech: assignAudioTrackDT;
    wordAnnotation: boolean
    phonemeAnnotation: boolean
    deadLine: string;
    remark: historyRemarkDT[]
    speechInfo: speechInfo;
    others: othersUploadAudioDT;
    speaker: speakerUploadAudioDT;
}

export type sentenceLevelUploadRootDT = {
    total_data_size: number;
    data: sentenceLevelUploadDT[]
}

export type sentenceLevelUploadDT = {
    id: string;
    speech: assignAudioTrackDT
    annotate: annotateInfoDT
    speechInfo: speechInfo;
    others: othersUploadAudioDT;
    speaker: speakerUploadAudioDT;
    deadLine: string
    audioChecker: audioCheckerDT
    remark: historyRemarkDT[]
}

export type scriptFilterDT = {
    id: string;
    title: string;
}

export type statusColorsDataDT = {
    name: string
    bgColor: string
    bulletColor: string
    textColor: string
}

export type annotatedFilesUploadRootDT = {
    total_data_size: number;
    data: annotatedFilesUploadDT[]
}

export type annotatedFilesUploadDT = {
    id: string;
    speech: assignAudioTrackDT;
    speechInfo: speechInfo;
    speaker: speakerUploadAudioDT;
    others: othersDT;
    history: historyDT[];
    audioChecker: annotatedAudioCheckerDT;
    annotator: annotatedAnnotatorDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[];
}

export type sentenceLevelValUploadRootDT = {
    total_data_size: number;
    data: sentenceLevelValUploadDT[]
}

export type sentenceLevelValUploadDT = {
    id: string;
    speech: assignAudioTrackDT;
    validate1: validateDT;
    validate2: validateDT;
    validateFinal: validateDT;
    deadLine: string;
    annotator: annotatedAnnotatorDT;
    audioChecker: annotatedAudioCheckerDT;
    speaker: speakerUploadAudioDT;
    script: scriptResDT;
    remark: historyRemarkDT[];
    others: othersDT;
    speechInfo: speechInfo
}

export type validatedFilesUploadRootDT = {
    total_data_size: number;
    data: validatedFilesUploadDT[]
}

export type validatedFilesUploadDT = {
    id: string;
    speech: assignAudioTrackDT;
    validatorFinal: validatorDT;
    status: string;
    validator2: validatorDT;
    validator1: validatorDT;
    annotator: annotatedAnnotatorDT;
    audioChecker: audioCheckerDT;
    speaker: speakerUploadAudioDT;
    deadLine: string;
    submissionDate: string;
    remark: historyRemarkDT[]
    speechInfo: speechInfo;
    others: othersDT
    history: historyDT[]
}

export type allCheckedAudioQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    audioChecker: string,
    collector: string,
    audioSubmissionPeriod: string,
    status: string
}

export type CollectedAudioQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    speaker: string,
    collector: string,
    audioSubmissionPeriod: string,
}

export type checkingStatusQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    speaker: string,
    collector: string,
    status: string,
    audioUploadPeriod: string,
}

export type annotationTypeQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    speaker: string,
}

export type collectAnnSenQueryDT = {
    page: number,
    pageSize: number,
    dateRange: string,
    speaker: string,
    audioChecker: string
}

export type annotatedFilesQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    annotator: string,
    audioChecker: string
    speaker: string,
    collector: string,
    audioSubmissionPeriod: string,
    status: string
}

export type validatedFilesQueryDT = {
    page: number,
    pageSize: number,
    script: string,
    validator: string,
    annotator: string,
    speaker: string,
    audioChecker: string
    collector: string,
    audioSubmissionPeriod: string,
    status: string
}

export type collectValSenDataQueryDT = {
    page: number,
    pageSize: number,
    dateRange: string,
    annotator: string,
    speaker: string,
    audioChecker: string
}

export type allCheckedSpeechQueryDT = {
    audioChecker: string,
    status: string,
    audioSubmissionPeriod: string
}

export type uploadAudioQueryDT = {
    dataType: string,
    uploader: string,
    uploadPeriod: string,
    domain: string
}

export type checkingStatusUploadQueryDT = {
    status: string,
}