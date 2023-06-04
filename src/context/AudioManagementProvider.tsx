import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { CollectedAudioQueryDT, allCheckedAudioQueryDT, allCheckedAudioRootDt, allCheckedSpeechQueryDT, allCheckedSpeechRootDT, annotatedFilesQueryDT, annotatedFilesRootDT, annotatedFilesUploadRootDT, annotationRootDT, annotationTypeQueryDT, annotationUploadRootDT, checkingStatusQueryDT, checkingStatusRootDT, checkingStatusUploadQueryDT, checkingStatusUploadRootDT, claimApplicationBodyParamsDT, collectAnnSenQueryDT, collectAnnSenRootDT, collectValSenDataQueryDT, collectValSenRootDT, collectedAudioDT, sentenceLevelUploadRootDT, sentenceLevelValUploadRootDT, uploadAnnSenQueryDT, uploadAnnotationTypeQueryDT, uploadAudioQueryDT, uploadAudioRootDT, uploadValSenDataQueryDT, uploadValidatedQueryDT, validatedFilesQueryDT, validatedFilesRootDT, validatedFilesUploadRootDT } from "../types/audioManagementTypes";
import { callingToast } from "../helpers/Utils";

interface ContextProps {
    getCollectedAudioData: (params: CollectedAudioQueryDT) => void;
    collectedAudio: collectedAudioDT;
    getCheckingStatusData: (params: checkingStatusQueryDT) => void;
    checkingStatusData: checkingStatusRootDT;
    getAllCheckedAudiosData: (params: allCheckedAudioQueryDT) => void;
    allCheckedAudiosData: allCheckedAudioRootDt;
    getAnnotationData: (params: annotationTypeQueryDT) => void;
    annotationData: annotationRootDT;
    getCollectAnnSenData: (params: collectAnnSenQueryDT) => void;
    collectAnnSenData: collectAnnSenRootDT
    getCollectAnnWordData: (params: collectAnnSenQueryDT) => void;
    collectAnnWordData: collectAnnSenRootDT
    getCollectAnnPhonemeData: (params: collectAnnSenQueryDT) => void;
    collectAnnPhonemeData: collectAnnSenRootDT
    getAnnotatedFilesData: (params: annotatedFilesQueryDT) => void;
    annotatedFilesData: annotatedFilesRootDT
    getCollectValSenData: (params: collectValSenDataQueryDT) => void;
    collectValSenData: collectValSenRootDT
    getCollectValWordData: (params: collectValSenDataQueryDT) => void;
    collectValWordData: collectValSenRootDT
    getCollectValPhonemeData: (params: collectValSenDataQueryDT) => void;
    collectValPhonemeData: collectValSenRootDT
    getValidatedFilesData: (params: validatedFilesQueryDT) => void;
    validatedFilesData: validatedFilesRootDT
    getUploadAudioData: (params: uploadAudioQueryDT) => void;
    uploadAudioData: uploadAudioRootDT;
    getCheckingStatusUploadData: (params: checkingStatusUploadQueryDT) => void;
    checkingStatusUploadData: checkingStatusUploadRootDT
    getAllCheckedAudiosUploadData: (params: allCheckedSpeechQueryDT) => void;
    allCheckedAudiosUploadData: allCheckedSpeechRootDT
    getAnnotationUploadData: (params: uploadAnnotationTypeQueryDT) => void;
    annotationUploadData: annotationUploadRootDT;
    getSentenceLevelUploadData: (params: uploadAnnSenQueryDT) => void;
    sentenceLevelUploadData: sentenceLevelUploadRootDT;
    getWordLevelUploadData: (params: uploadAnnSenQueryDT) => void;
    wordLevelUploadData: sentenceLevelUploadRootDT
    getPhonemeLevelUploadData: (params: uploadAnnSenQueryDT) => void;
    phonemeLevelUploadData: sentenceLevelUploadRootDT;
    getAnnotatedFilesUploadData: (params: annotatedFilesQueryDT) => void;
    annotatedFilesUploadData: annotatedFilesUploadRootDT
    getSentenceLevelUploadVal: (params: uploadValSenDataQueryDT) => void;
    sentenceLevelUploadVal: sentenceLevelValUploadRootDT
    getWordLevelUploadVal: (params: uploadValSenDataQueryDT) => void;
    wordLevelUploadVal: sentenceLevelValUploadRootDT;
    getPhonemeLevelUploadVal: (params: uploadValSenDataQueryDT) => void;
    phonemeLevelUploadVal: sentenceLevelValUploadRootDT;
    getValidatedFilesUploadData: (params: uploadValidatedQueryDT) => void
    validatedFilesUploadData: validatedFilesUploadRootDT
    audioCheckerList: string[];
    getAudioCheckerList: (type: string) => void;
    getSpeakerList: (type: string) => void;
    speakerList: string[];
    getCollectorList: (type: string) => void;
    collectorList: string[];
    getAnnotatorList: (type: string) => void;
    annotatorList: string[];
    validatorList: string[];
    getValidatorList: (type: string) => void;
    scriptList: string[];
    getScriptList: (type: string) => void;
    postReassignAllChecking: (ids: string[]) => void;
    postReassignAnnotatedFiles: (ids: string[]) => void;
    postReassignValidationLevel: (ids: string[]) => void;
    postClaimValidatedLevel: (params: claimApplicationBodyParamsDT) => void;
    postClaimAnnotatedFiles: (params: claimApplicationBodyParamsDT) => void;
    postClaimAllChecked: (params: claimApplicationBodyParamsDT) => void;
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    // const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    // const [collectedAudioCollector, setCollectedAudioCollector] = useState<string[]>([] as string[]);
    // const [collectedAudioSpeakers, setCollectedAudioSpeakers] = useState<string[]>([] as string[]);
    const [collectedAudio, setCollectedAudio] = useState<collectedAudioDT>({} as collectedAudioDT);
    const [checkingStatusData, setCheckingStatusData] = useState<checkingStatusRootDT>({} as checkingStatusRootDT);
    const [allCheckedAudiosData, setAllCheckedAudiosData] = useState<allCheckedAudioRootDt>({} as allCheckedAudioRootDt);
    const [annotationData, setAnnotationData] = useState<annotationRootDT>({} as annotationRootDT);
    const [collectAnnSenData, setCollectAnnSenData] = useState<collectAnnSenRootDT>({} as collectAnnSenRootDT);
    const [collectAnnWordData, setCollectAnnWordData] = useState<collectAnnSenRootDT>({} as collectAnnSenRootDT);
    const [collectAnnPhonemeData, setCollectAnnPhonemeData] = useState<collectAnnSenRootDT>({} as collectAnnSenRootDT);
    const [annotatedFilesData, setAnnotatedFilesData] = useState<annotatedFilesRootDT>({} as annotatedFilesRootDT);
    const [collectValSenData, setCollectValSenData] = useState<collectValSenRootDT>({} as collectValSenRootDT);
    const [collectValWordData, setCollectValWordData] = useState<collectValSenRootDT>({} as collectValSenRootDT);
    const [collectValPhonemeData, setCollectValPhonemeData] = useState<collectValSenRootDT>({} as collectValSenRootDT);
    const [validatedFilesData, setValidatedFilesData] = useState<validatedFilesRootDT>({} as validatedFilesRootDT)
    const [uploadAudioData, setUploadAudioData] = useState<uploadAudioRootDT>({} as uploadAudioRootDT)
    const [checkingStatusUploadData, setCheckingStatusUploadData] = useState<checkingStatusUploadRootDT>({} as checkingStatusUploadRootDT)
    const [allCheckedAudiosUploadData, setAllCheckedAudiosUploadData] = useState<allCheckedSpeechRootDT>({} as allCheckedSpeechRootDT)
    const [annotationUploadData, setAnnotationUploadData] = useState<annotationUploadRootDT>({} as annotationUploadRootDT)
    const [sentenceLevelUploadData, setSentenceLevelUploadData] = useState<sentenceLevelUploadRootDT>({} as sentenceLevelUploadRootDT)
    const [wordLevelUploadData, setWordLevelUploadData] = useState<sentenceLevelUploadRootDT>({} as sentenceLevelUploadRootDT)
    const [phonemeLevelUploadData, setPhonemeLevelUploadData] = useState<sentenceLevelUploadRootDT>({} as sentenceLevelUploadRootDT)
    const [annotatedFilesUploadData, setAnnotatedFilesUploadData] = useState<annotatedFilesUploadRootDT>({} as annotatedFilesUploadRootDT)
    const [sentenceLevelUploadVal, setSentenceLevelUploadVal] = useState<sentenceLevelValUploadRootDT>({} as sentenceLevelValUploadRootDT)
    const [wordLevelUploadVal, setWordLevelUploadVal] = useState<sentenceLevelValUploadRootDT>({} as sentenceLevelValUploadRootDT)
    const [phonemeLevelUploadVal, setPhonemeLevelUploadVal] = useState<sentenceLevelValUploadRootDT>({} as sentenceLevelValUploadRootDT)
    const [validatedFilesUploadData, setValidatedFilesUploadData] = useState<validatedFilesUploadRootDT>({} as validatedFilesUploadRootDT)
    const [audioCheckerList, setAudioCheckerList] = useState<string[]>([] as string[]);
    const [speakerList, setSpeakerList] = useState<string[]>([] as string[]);
    const [collectorList, setCollectorList] = useState<string[]>([] as string[]);
    const [annotatorList, setAnnotatorList] = useState<string[]>([] as string[]);
    const [validatorList, setValidatorList] = useState<string[]>([] as string[]);
    const [scriptList, setScriptList] = useState<string[]>([] as string[]);


    const getAudioCheckerList = (type: string) => {
        const res = audioManagementService.getAudioCheckerList(type);
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setAudioCheckerList(concatenatedStrings);
    }
    const getSpeakerList = (type: string) => {
        const res = audioManagementService.getSpeakerList(type);
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setSpeakerList(concatenatedStrings);
    }

    const getCollectorList = (type: string) => {
        const res = audioManagementService.getCollectorList(type);
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectorList(concatenatedStrings);
    }

    const getAnnotatorList = (type: string) => {
        const res = audioManagementService.getAnnotatorList(type);
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setAnnotatorList(concatenatedStrings);
    }

    const getValidatorList = (type: string) => {
        const res = audioManagementService.getValidatorList(type);
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setValidatorList(concatenatedStrings);
    }

    const getScriptList = (type: string) => {
        const res = audioManagementService.getScriptList();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setScriptList(concatenatedStrings);
    }

    const getCollectedAudioData = async (params: CollectedAudioQueryDT) => {
        const res = await audioManagementService.getCollectedAudioData(params);
        setCollectedAudio(res.data);
    }

    const getCheckingStatusData = async (params: checkingStatusQueryDT) => {
        const res = await audioManagementService.getCheckingStatusData(params);
        setCheckingStatusData(res.data);
    }

    const getAllCheckedAudiosData = async (params: allCheckedAudioQueryDT) => {
        const res = await audioManagementService.getAllCheckedAudiosData(params);
        setAllCheckedAudiosData(res.data);
    }

    const getAnnotationData = async (params: annotationTypeQueryDT) => {
        const res = await audioManagementService.getAnnotationData(params);
        setAnnotationData(res.data);
    }

    const getCollectAnnSenData = async (params: collectAnnSenQueryDT) => {
        const res = await audioManagementService.getCollectAnnSenData(params);
        setCollectAnnSenData(res.data);
    }

    const getCollectAnnWordData = async (params: collectAnnSenQueryDT) => {
        const res = await audioManagementService.getCollectAnnWordData(params);
        setCollectAnnWordData(res.data);
    }

    const getCollectAnnPhonemeData = async (params: collectAnnSenQueryDT) => {
        const res = await audioManagementService.getCollectAnnPhonemeData(params);
        setCollectAnnPhonemeData(res.data);
    }

    const getAnnotatedFilesData = async (params: annotatedFilesQueryDT) => {
        const res = await audioManagementService.getAnnotatedFilesData(params);
        setAnnotatedFilesData(res.data);
    }

    const getCollectValSenData = async (params: collectValSenDataQueryDT) => {
        const res = await audioManagementService.getCollectValSenData(params);
        setCollectValSenData(res.data);
    }

    const getCollectValWordData = async (params: collectValSenDataQueryDT) => {
        const res = await audioManagementService.getCollectValWordData(params);
        setCollectValWordData(res.data);
    }

    const getCollectValPhonemeData = async (params: collectValSenDataQueryDT) => {
        const res = await audioManagementService.getCollectValPhonemeData(params);
        setCollectValPhonemeData(res.data);
    }

    const getValidatedFilesData = async (params: validatedFilesQueryDT) => {
        const res = await audioManagementService.getValidatedFilesData(params);
        setValidatedFilesData(res.data);
    }

    const getUploadAudioData = async (params: uploadAudioQueryDT) => {
        const res = await audioManagementService.getUploadAudiosData(params);
        setUploadAudioData(res.data);
    }

    const getCheckingStatusUploadData = async (params: checkingStatusUploadQueryDT) => {
        const res = await audioManagementService.getCheckinStatusUploadData(params);
        setCheckingStatusUploadData(res.data);
    }

    const getAllCheckedAudiosUploadData = async (params: allCheckedSpeechQueryDT) => {
        const res = await audioManagementService.getAllCheckedAudiosUploadData(params);
        setAllCheckedAudiosUploadData(res.data);
    }

    const getAnnotationUploadData = async (params: uploadAnnotationTypeQueryDT) => {
        const res = await audioManagementService.getAnnotationUploadData(params);
        setAnnotationUploadData(res.data);
    }

    const getSentenceLevelUploadData = async (params: uploadAnnSenQueryDT) => {
        const res = await audioManagementService.getSentenceLevelUploadData(params);
        setSentenceLevelUploadData(res.data);
    }

    const getWordLevelUploadData = async (params: uploadAnnSenQueryDT) => {
        const res = await audioManagementService.getWordLevelUploadData(params);
        setWordLevelUploadData(res.data);
    }

    const getPhonemeLevelUploadData = async (params: uploadAnnSenQueryDT) => {
        const res = await audioManagementService.getPhonemeLevelUploadData(params);
        setPhonemeLevelUploadData(res.data);
    }

    const getAnnotatedFilesUploadData = async (params: annotatedFilesQueryDT) => {
        const res = await audioManagementService.getAnnotatedFilesUploadData(params);
        setAnnotatedFilesUploadData(res.data);
    }

    const getSentenceLevelUploadVal = async (params: uploadValSenDataQueryDT) => {
        const res = await audioManagementService.getSentenceLevelUploadVal(params);

        setSentenceLevelUploadVal(res.data);
    }

    const getWordLevelUploadVal = async (params: uploadValSenDataQueryDT) => {
        const res = await audioManagementService.getWordLevelUploadVal(params);
        setWordLevelUploadVal(res.data);
    }

    const getPhonemeLevelUploadVal = async (params: uploadValSenDataQueryDT) => {
        const res = await audioManagementService.getPhonemeLevelUploadVal(params);
        setPhonemeLevelUploadVal(res.data);
    }

    const getValidatedFilesUploadData = async (params: uploadValidatedQueryDT) => {
        const res = await audioManagementService.getValidatedFilesUploadData(params);
        setValidatedFilesUploadData(res.data);
    }

    const postReassignAllChecking = async (ids: string[]) => {
        const res = await audioManagementService.postReassignAllChecking(ids);
        if (res.status === 200) {
        }
    }

    const postReassignAnnotatedFiles = async (ids: string[]) => {
        const res = await audioManagementService.postReassignAnnotatedFiles(ids);
        if (res.status === 200) {
        }
    }

    const postReassignValidationLevel = async (ids: string[]) => {
        const res = await audioManagementService.postReassignValidationLevel(ids);
        if (res.status === 200) {
        }
    }

    const postClaimValidatedLevel = async (params: claimApplicationBodyParamsDT) => {
        const res = await audioManagementService.postClaimValidatedLevel(params);
        if (res.status === 200) {
            callingToast("Claim application has been sent")
        }
    }

    const postClaimAnnotatedFiles = async (params: claimApplicationBodyParamsDT) => {
        const res = await audioManagementService.postClaimAnnotatedFiles(params);
        if (res.status === 200) {
            callingToast("Claim application has been sent")
        }
    }

    const postClaimAllChecked = async (params: claimApplicationBodyParamsDT) => {
        const res = await audioManagementService.postClaimAllChecked(params);
        if (res.status === 200) {
            callingToast("Claim application has been sent")
        }
    }

    return (
        <AudioManagementContext.Provider
            value={{
                // getScriptFilter,
                // scriptFilter,
                getCollectedAudioData,
                collectedAudio,
                getCheckingStatusData,
                checkingStatusData,
                getAllCheckedAudiosData,
                allCheckedAudiosData,
                getAnnotationData,
                annotationData,
                getCollectAnnSenData,
                collectAnnSenData,
                getCollectAnnWordData,
                collectAnnWordData,
                getCollectAnnPhonemeData,
                collectAnnPhonemeData,
                getAnnotatedFilesData,
                annotatedFilesData,
                getCollectValSenData,
                collectValSenData,
                getCollectValWordData,
                collectValWordData,
                getCollectValPhonemeData,
                collectValPhonemeData,
                getValidatedFilesData,
                validatedFilesData,
                getUploadAudioData,
                uploadAudioData,
                getCheckingStatusUploadData,
                checkingStatusUploadData,
                getAllCheckedAudiosUploadData,
                allCheckedAudiosUploadData,
                getAnnotationUploadData,
                annotationUploadData,
                getSentenceLevelUploadData,
                sentenceLevelUploadData,
                getWordLevelUploadData,
                wordLevelUploadData,
                getPhonemeLevelUploadData,
                phonemeLevelUploadData,
                getAnnotatedFilesUploadData,
                annotatedFilesUploadData,
                getSentenceLevelUploadVal,
                sentenceLevelUploadVal,
                getWordLevelUploadVal,
                wordLevelUploadVal,
                getPhonemeLevelUploadVal,
                phonemeLevelUploadVal,
                getValidatedFilesUploadData,
                validatedFilesUploadData,
                audioCheckerList,
                getAudioCheckerList,
                speakerList,
                getSpeakerList,
                collectorList,
                getCollectorList,
                annotatorList,
                getAnnotatorList,
                getValidatorList,
                validatorList,
                getScriptList,
                scriptList,
                postReassignAllChecking,
                postReassignAnnotatedFiles,
                postReassignValidationLevel,
                postClaimAllChecked,
                postClaimAnnotatedFiles,
                postClaimValidatedLevel
            }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;