import axios from 'axios';
import { collectedAudioCollectorList, scriptFilterData, collectValSenData, collectedAudioSpeakersList, collectedAudioCheckerList, collectedAudioAnnotatorList, collectedAudioValidatorList } from '../data/audioManagement/AudioManagementData';
import { allCheckedSpeechData, annotatedFilesUploadData, annotationUploadData, checkingStatusUploadData, sentenceLevelUploadData, uploadAudioData, ValidatedFilesUploadData, sentenceLevelValUpload } from '../data/audioManagement/UploadAudiosData';
import * as PATH from '../helpers/APIURL';
import { CollectedAudioQueryDT, allCheckedAudioQueryDT, allCheckedSpeechQueryDT, annotatedFilesQueryDT, annotatedFilesUploadQueryDT, annotationTypeQueryDT, checkingStatusQueryDT, checkingStatusUploadQueryDT, collectAnnSenQueryDT, collectValSenDataQueryDT, uploadAnnSenQueryDT, uploadAnnotationTypeQueryDT, uploadAudioQueryDT, uploadValSenDataQueryDT, uploadValidatedQueryDT, validatedFilesQueryDT } from '../types/audioManagementTypes';


export default class audioManagementService {

    static getCollectedAudioData(params: CollectedAudioQueryDT) {
        // return collectedAudio;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_AUDIO_MGT_MODULE, { params: params })
    }

    static getCheckingStatusData(params: checkingStatusQueryDT) {
        // return checkingStatusData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_CHECKING_STATUS_AUDIO_MGT_MODULE, { params: params })

    }

    static getAllCheckedAudiosData(params: allCheckedAudioQueryDT) {
        // return allCheckedAudiosData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ALL_CHECKED_AUDIOS_AUDIO_MGT_MODULE, { params: params })
    }

    static getAnnotationData(params: annotationTypeQueryDT) {
        // return annotationData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_TYPE_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnSenData(params: collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_SENTENCE_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnWordData(params: collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_WORD_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectAnnPhonemeData(params: collectAnnSenQueryDT) {
        // return collectAnnSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATION_PHONEME_AUDIO_MGT_MODULE, { params: params })
    }

    static getAnnotatedFilesData(params: annotatedFilesQueryDT) {
        // return annotatedFiles;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_ANNOTATED_FILES_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectValSenData(params: collectValSenDataQueryDT) {
        // return collectValSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_VALIDATION_SENTENCE_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectValWordData(params: collectValSenDataQueryDT) {
        // return collectValSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_VALIDATION_WORD_AUDIO_MGT_MODULE, { params: params })
    }

    static getCollectValPhonemeData(params: collectValSenDataQueryDT) {
        // return collectValSenData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_VALIDATION_PHONEME_AUDIO_MGT_MODULE, { params: params })

    }

    static getValidatedFilesData(params: validatedFilesQueryDT) {
        // return validatedFilesData;
        return axios.get(PATH.GET_RES_COLLECTED_AUDIO_VALIDATED_LEVEL_AUDIO_MGT_MODULE, { params: params })

    }

    static getUploadAudiosData(params:uploadAudioQueryDT) {
        // return uploadAudioData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_AUDIO_MGT_MODULE, { params: params })

    }

    static getCheckinStatusUploadData(params:checkingStatusUploadQueryDT) {
        // return checkingStatusUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_CHECKING_STATUS_AUDIO_MGT_MODULE, { params: params })
    }

    static getAllCheckedAudiosUploadData(params:allCheckedSpeechQueryDT) {
        // return allCheckedSpeechData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ALL_CHECKED_AUDIO_MGT_MODULE, { params: params })
    }

    static getAnnotationUploadData(params:uploadAnnotationTypeQueryDT) {
        // return annotationUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ANNOTATION_TYPE_AUDIO_MGT_MODULE, { params: params })
    }

    static getSentenceLevelUploadData(params:uploadAnnSenQueryDT) {
        // return sentenceLevelUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ANNOTATION_SENTENCE_AUDIO_MGT_MODULE, { params: params })
    }

    static getWordLevelUploadData(params:uploadAnnSenQueryDT) {
        // return sentenceLevelUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ANNOTATION_WORD_AUDIO_MGT_MODULE, { params: params })
    }

    static getPhonemeLevelUploadData(params:uploadAnnSenQueryDT) {
        // return sentenceLevelUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ANNOTATION_PHONEME_AUDIO_MGT_MODULE, { params: params })

    }

    static getAnnotatedFilesUploadData(params:annotatedFilesUploadQueryDT) {
        // return annotatedFilesUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_ANNOTATED_FILES_AUDIO_MGT_MODULE, { params: params })
    }

    static getSentenceLevelUploadVal(params:uploadValSenDataQueryDT) {
        // return sentenceLevelValUpload;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_VALIDATION_SENTENCE_AUDIO_MGT_MODULE, { params: params })
    }

    static getWordLevelUploadVal(params:uploadValSenDataQueryDT) {
        // return sentenceLevelValUpload;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_VALIDATION_WORD_AUDIO_MGT_MODULE, { params: params })
    }

    static getPhonemeLevelUploadVal(params:uploadValSenDataQueryDT) {
        // return sentenceLevelValUpload;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_VALIDATION_PHONEME_AUDIO_MGT_MODULE, { params: params })
    }

    static getValidatedFilesUploadData(params:uploadValidatedQueryDT) {
        // return ValidatedFilesUploadData;
        return axios.get(PATH.GET_RES_UPLOAD_AUDIO_VALIDATED_FILES_AUDIO_MGT_MODULE, { params: params })
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
