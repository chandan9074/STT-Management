import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import { allScriptResDT, scriptResDT } from "./script"

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
    speaker: speakerLocalityDT;
    audioChecker: audioCheckerDT;
    deadLine: string;
    remark: remarkInfoDT;
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
    locality: string;
}

export type remarkInfoDT = {
    roleInfo: roleDT
    des: string
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

export type annotatedFilesDT = {
    id: string;
    speech: assignAudioTrackDT;
    speaker: speakerLocalityDT;
    audioChecker: audioCheckerDT;
    status: string;
    script: scriptResDT;
    deadLine: string;
    submissionDate: string;
    remark: remarkInfoDT;
    annotate: annotateInfoDT;
}