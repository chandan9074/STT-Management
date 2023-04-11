import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import { scriptResDT } from "./script";

export type audioManagementDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: scriptResDT;
    speaker: speakerLocalityDT;
}

export type checkingStatusDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: scriptResDT;
    speaker: speakerLocalityDT2;
    audioChecker: audioCheckerDT;
    deadLine: string;
    remark: remarkInfoDT;
    others: othersDT;
}

export type journeyDT = {
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
    locality: string;
    speakers: singleSpeakerDT[]
};

export type singleSpeakerDT = {
    id: string;
    name: string;
    role: string;
    gender: string;
}

export type allCheckedAudioDT = {
    id: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalityDT2;
    audioChecker: audioCheckerDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: remarkInfoDT;
    others: othersDT;
    history: historyDT[];
}

export type historyDT = {
    id: string;
    lastEdited: string;
    status: string;
    name: string;
    role: string;
    remark: historyRemark[]
}

export type historyRemark = {
    id: string;
    roleInfo: {
        id: string;
        name: string;
        role: string;
        gender: string;
    };
    deadline: string;
    des: string;
    status: string;
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

export type annotationDT = {
    id: string;
    speech: assignAudioTrackDT
    script: scriptResDT
    speaker: speakerLocalityDT
    deadLine: string
    remark: remarkInfoDT
}

export type collectAnnSenDataDT = {
    id: string;
    speech: assignAudioTrackDT
    annotate: annotateInfoDT
    deadLine: string
    audioChecker: audioCheckerDT
    speaker: speakerLocalityDT
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
    audioCheckers: audioRoleDT
}

export type audioRoleDT = {
    id: string;
    name: string;
    role: string;
    gender: string;
}


export type annotatedFilesDT = {
    id: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalitySingleDT;
    audioChecker: annotatedAudioCheckerDT;
    annotator: annotatedAnnotatorDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: remarkInfoDT;
    // annotate: annotateInfoDT;
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
    remark: remarkInfoDT
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

export type collectValSenDataDT = {
    id: string;
    speech: assignAudioTrackDT;
    validate1: validateDT;
    validate2: validateDT;
    validateFinal: validateDT;
    deadLine: string;
    annotator: annotatedAnnotatorDT;
    audioChecker: annotatedAudioCheckerDT;
    speaker: speakerLocalityDT;
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
    validators: audioRoleDT
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

export type uploadAudioDataDT = {
    id: string;
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

export type checkingStatusUploadDataDT = {
    id: string;
    speech: assignAudioTrackDT;
    audioChecker: audioCheckerDT;
    deadLine: string;
}

export type allCheckedSpeechDT = {
    id: string;
    speech: assignAudioTrackDT;
    audioChecker: audioCheckerDT;
    status: string;
    deadLine: string;
    submissionDate: string;
    remark: remarkInfoDT;
}

export type annotationUploadDT = {
    id: string;
    speech: assignAudioTrackDT;
    deadLine: string;
    remark: remarkInfoDT
}

export type sentenceLevelUploadDT = {
    id: string;
    speech: assignAudioTrackDT
    annotate: annotateInfoDT
    deadLine: string
    audioChecker: audioCheckerDT
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