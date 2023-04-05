import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import { scriptResDT } from "./script";

export type audioManagementDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: scriptResDT;
    speaker: speakerLocalityDT;
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

export type othersDT  = {
    device: string;
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

export type allCheckedAudioDT = {
    id: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalityDT;
    audioChecker: audioCheckerDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: remarkInfoDT;
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

export type collectValSenDataDT = {
    id: string;
    speech: assignAudioTrackDT;
    validate1: validateDT;
    validate2: validateDT;
    validateFinal: validateDT;
    deadLine: string;
    annotator: annotatedAnnotatorDT;
    audioChecker: annotatedAudioCheckerDT;
    speaker: speakerLocalitySingleDT;
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
}

export type uploaderDT = {
    role: string;
    name: string;
}

export type checkingStatusUploadDataDT = {
    id: string;
    speech:assignAudioTrackDT;
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