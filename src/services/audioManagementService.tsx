import { allCheckedAudiosData, annotationData, checkingStatusData, collectAnnSenData, collectedAudio, scriptFilterData,annotatedFiles, collectValSenData } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, uploadAudioData } from '../data/audioManagement/UploadAudiosData';

export default class audioManagementService {
    static getScriptFilters() {
        return scriptFilterData;
    }

    static getCollectedAudioData() {
        return collectedAudio;
    }

    static getCheckingStatusData() {
        return checkingStatusData;
    }

    static getAllCheckedAudiosData() {
        return allCheckedAudiosData;
    }

    static getAnnotationData() {
        return annotationData;
    }

    static getCollectAnnSenData() {
        return collectAnnSenData;
    }

    static getCollectAnnWordData() {
        return collectAnnSenData;
    }

    static getCollectAnnPhonemeData() {
        return collectAnnSenData;
    }

    static getAnnotatedFilesData() {
        return annotatedFiles;
    }

    static getCollectValSenData() {
        return collectValSenData;
    }

    static getCollectValWordData() {
        return collectValSenData;
    }

    static getCollectValPhonemeData() {
        return collectValSenData;
    }

    static getUploadAudiosData() {
        return uploadAudioData;
    }

    static getCheckinStatusUploadData() {
        return checkingStatusUploadData;
    }

    static getAllCheckedAudiosUploadData() {
        return allCheckedSpeechData;
    }

    static getAnnotationUploadData() {
        return annotationUploadData;
    }

    static getSentenceLevelUploadData() {
        return sentenceLevelUploadData;
    }

    static getWordLevelUploadData() {
        return sentenceLevelUploadData;
    }

    static getPhonemeLevelUploadData() {
        return sentenceLevelUploadData;
    }

    static getAnnotatedFilesUploadData() {
        return annotatedFiles;
    }

    static getSentenceLevelUploadVal() {
        return collectValSenData;
    }

    static getWordLevelUploadVal() {
        return collectValSenData;
    }

    static getPhonemeLevelUploadVal() {
        return collectValSenData;
    }
}
