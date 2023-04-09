import { collectedAudio, scriptFilterData } from '../data/audioManagement/AudioManagementData';

export default class audioManagementService {
    static getScriptFilters() {
        return scriptFilterData;
    }

    static getCollectedAudioData() {
        return collectedAudio;
    }
}
