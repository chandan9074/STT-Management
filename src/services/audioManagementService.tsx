import { collectedAudio, scriptFilterData } from '../data/audioManagement/AudioManagementData';

export default class audioManagementService {
    static getScriptFilter() {
        return scriptFilterData;
    }

    static getCollectedAudioData() {
        return collectedAudio;
    }
}
