import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import { allScriptResDT } from "./script"

export type audioManagementDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: allScriptResDT;
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
    script: allScriptResDT;
    speaker: speakerLocalityDT;
    audioChecker: audioCheckerDT;
    deadLine: string;
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