import axios from 'axios';
import { collectedAudioCollectorList, allCheckedAudiosData, annotationData, checkingStatusData, collectAnnSenData, collectedAudio, scriptFilterData, annotatedFiles, collectValSenData, validatedFilesData, collectedAudioSpeakersList, collectedAudioCheckerList, collectedAudioAnnotatorList, collectedAudioValidatorList } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotatedFilesUploadData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, uploadAudioData, ValidatedFilesUploadData, sentenceLevelValUpload } from '../data/audioManagement/UploadAudiosData';
import * as PATH from '../helpers/APIURL'
import { CollectedAudioQueryDT, allCheckedAudioQueryDT, annotationTypeQueryDT, checkingStatusQueryDT, collectAnnSenQueryDT } from '../types/audioManagementTypes';


export default class audioManagementService {

    static getCollectedAudioData(params:CollectedAudioQueryDT) {
        // return collectedAudio;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_AUDIO_MGT_MODULE, { params: params })
    }

    static getCheckingStatusData(params:checkingStatusQueryDT) {
        // return checkingStatusData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_CHECKING_STATUS_AUDIO_MGT_MODULE, { params: params })

    }

    static getAllCheckedAudiosData(params: allCheckedAudioQueryDT) {
        // return allCheckedAudiosData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ALL_CHECKED_AUDIOS_AUDIO_MGT_MODULE, { params: params })
    }

    static getAnnotationData(params:annotationTypeQueryDT) {
        // return annotationData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_TYPE_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnSenData(params:collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_SENTENCE_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnWordData(params:collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_WORD_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnPhonemeData(params:collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_PHONEME_AUDIO_MGT_MODULE, { params: params })
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
