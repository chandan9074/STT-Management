import { collectedAudioCollectorList, allCheckedAudiosData, annotationData, checkingStatusData, collectAnnSenData, collectedAudio, scriptFilterData, annotatedFiles, collectValSenData, validatedFilesData, collectedAudioSpeakersList, collectedAudioCheckerList, collectedAudioAnnotatorList, collectedAudioValidatorList } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotatedFilesUploadData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, uploadAudioData, ValidatedFilesUploadData, sentenceLevelValUpload } from '../data/audioManagement/UploadAudiosData';

export default class audioManagementService {
    static getScriptFilters() {
        return scriptFilterData;
    }
    static getCollectedAudioCollector() {
        return collectedAudioCollectorList;
    }

    static getCollectedAudioSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioCheckingStatusScript() {
        return scriptFilterData;
    }

    static getCollectedAudioCheckingStatusCollector() {
        return collectedAudioCollectorList;
    }

    static getCollectedAudioAllCheckingStatusSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAllCheckingStatusScript() {
        return scriptFilterData;
    }

    static getCollectedAudioAllCheckingStatusChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioAllCheckingStatusCollector() {
        return collectedAudioCollectorList;
    }

    static getCollectedAudioCheckingStatusSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationTypeSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationTypeScript() {
        return scriptFilterData;
    }

    static getCollectedAudioAnnotationSentenceChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioAnnotationSentenceSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationWordChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioAnnotationWordSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationPhonemeChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioAnnotationPhonemeSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationAnnotatedAnnotator() {
        return collectedAudioAnnotatorList;
    }

    static getCollectedAudioAnnotationAnnotatedSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioAnnotationAnnotatedScript() {
        return scriptFilterData;
    }

    static getCollectedAudioAnnotationAnnotatedChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioAnnotationAnnotatedCollector() {
        return collectedAudioCollectorList;
    }

    static getCollectedAudioValidationSentenceChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioValidationSentenceAnnotator() {
        return collectedAudioAnnotatorList;
    }

    static getCollectedAudioValidationSentenceSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioValidationWordChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioValidationWordAnnotator() {
        return collectedAudioAnnotatorList;
    }

    static getCollectedAudioValidationWordSpeakers() {
        return collectedAudioSpeakersList;
    }

    static getCollectedAudioValidationPhonemeChecker() {
        return collectedAudioCheckerList;
    }

    static getCollectedAudioValidationPhonemeAnnotator() {
        return collectedAudioAnnotatorList;
    }

    static getCollectedAudioValidationPhonemeSpeakers() {
        return collectedAudioSpeakersList;
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

    static postReassignAudios (ids: string[]) {
        return "";
    }
}
