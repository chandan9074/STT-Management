import { collectedAudioCollectorList, allCheckedAudiosData, annotationData, checkingStatusData, collectAnnSenData, collectedAudio, scriptFilterData, annotatedFiles, collectValSenData, validatedFilesData } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotatedFilesUploadData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, sentenceLevelValUpload, uploadAudioData, ValidatedFilesUploadData } from '../data/audioManagement/UploadAudiosData';

export default class audioManagementService {
    static getScriptFilters() {
        return scriptFilterData;
    }
    static getCollectedAudioCollector() {
        return collectedAudioCollectorList;
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

    static getValidatedFilesData() {
        return validatedFilesData;
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
        return annotatedFilesUploadData;
    }

    static getSentenceLevelUploadVal() {
        return sentenceLevelValUpload;
    }

    static getWordLevelUploadVal() {
        return sentenceLevelValUpload;
    }

    static getPhonemeLevelUploadVal() {
        return sentenceLevelValUpload;
    }
    static getValidatedFilesUploadData() {
        return ValidatedFilesUploadData;
    }
}
