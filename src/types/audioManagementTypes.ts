import { assignAudioTrackDT } from "./assignTypes";
import { roleDT } from "./billingTypes";
import {allScriptResDT} from "./script"

export type audioManagementDT = {
    id: string;
    speech: assignAudioTrackDT;
    script: allScriptResDT;
    speaker: roleDT[];
}
