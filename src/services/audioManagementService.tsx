import { collectedAudioCollectorList, allCheckedAudiosData, annotationData, checkingStatusData, collectAnnSenData, collectedAudio, scriptFilterData, annotatedFiles, collectValSenData, validatedFilesData, collectedAudioSpeakersList, collectedAudioCheckerList, collectedAudioAnnotatorList, collectedAudioValidatorList } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotatedFilesUploadData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, uploadAudioData, ValidatedFilesUploadData, sentenceLevelValUpload } from '../data/audioManagement/UploadAudiosData';

export default class audioManagementService {
    
    static getCollectedAudioData() {
        return collectedAudio;
    }

    static getCheckingStatusData() {
        return checkingStatusData;
    }

    static getAllCheckedAudiosData() {
        return allCheckedAudiosData;
        // return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ALL_CHECKED_AUDIOS_AUDIO_MGT_MODULE)
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

    static getAudioCheckerList = (type: string) => {
        return collectedAudioCheckerList;
    }

    static getSpeakerList = (type: string) => {
        return collectedAudioSpeakersList;
    }

    static getCollectorList = (type: string) => {
        return collectedAudioCollectorList;
    }

    static getAnnotatorList = (type: string) => {
        return collectedAudioAnnotatorList;
    }

    static getValidatorList = (type: string) => {
        return collectedAudioValidatorList;
    }

    static getScriptList() {
        return scriptFilterData;
    }

    static postReassignAudios(ids: string[]) {
        return "";
    }
}
