import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { allCheckedAudioDT, allCheckedSpeechDT, annotatedFilesDT, annotatedFilesUploadDT, annotationDT, annotationUploadDT, audioManagementDT, checkingStatusDT, checkingStatusUploadDataDT, collectAnnSenDataDT, collectValSenDataDT, sentenceLevelUploadDT, sentenceLevelValUploadDT, uploadAudioDataDT, validatedFilesDT, validatedFilesUploadDT } from "../types/audioManagementTypes";

interface ContextProps {
    getCollectedAudioData: () => void;
    collectedAudio: audioManagementDT[];
    getCheckingStatusData: () => void;
    checkingStatusData: checkingStatusDT[];
    getAllCheckedAudiosData: () => void;
    allCheckedAudiosData: allCheckedAudioDT[];
    getAnnotationData: () => void;
    annotationData: annotationDT[];
    getCollectAnnSenData: () => void;
    collectAnnSenData: collectAnnSenDataDT[]
    getCollectAnnWordData: () => void;
    collectAnnWordData: collectAnnSenDataDT[]
    getCollectAnnPhonemeData: () => void;
    collectAnnPhonemeData: collectAnnSenDataDT[]
    getAnnotatedFilesData: () => void;
    annotatedFilesData: annotatedFilesDT[]
    getCollectValSenData: () => void;
    collectValSenData: collectValSenDataDT[]
    getCollectValWordData: () => void;
    collectValWordData: collectValSenDataDT[]
    getCollectValPhonemeData: () => void;
    collectValPhonemeData: collectValSenDataDT[]
    getValidatedFilesData: () => void;
    validatedFilesData: validatedFilesDT[]
    getUploadAudioData: () => void;
    uploadAudioData: uploadAudioDataDT[];
    getCheckingStatusUploadData: () => void;
    checkingStatusUploadData: checkingStatusUploadDataDT[]
    getAllCheckedAudiosUploadData: () => void;
    allCheckedAudiosUploadData: allCheckedSpeechDT[]
    getAnnotationUploadData: () => void;
    annotationUploadData: annotationUploadDT[];
    getSentenceLevelUploadData: () => void;
    sentenceLevelUploadData: sentenceLevelUploadDT[];
    getWordLevelUploadData: () => void;
    wordLevelUploadData: sentenceLevelUploadDT[]
    getPhonemeLevelUploadData: () => void;
    phonemeLevelUploadData: sentenceLevelUploadDT[];
    getAnnotatedFilesUploadData: () => void;
    annotatedFilesUploadData: annotatedFilesUploadDT[]
    getSentenceLevelUploadVal: () => void;
    sentenceLevelUploadVal: sentenceLevelValUploadDT[]
    getWordLevelUploadVal: () => void;
    wordLevelUploadVal: sentenceLevelValUploadDT[];
    getPhonemeLevelUploadVal: () => void;
    phonemeLevelUploadVal: sentenceLevelValUploadDT[];
    getValidatedFilesUploadData: () => void
    validatedFilesUploadData: validatedFilesUploadDT[]
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
    postReassignAudios: (ids: string[]) => void;
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    // const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    // const [collectedAudioCollector, setCollectedAudioCollector] = useState<string[]>([] as string[]);
    // const [collectedAudioSpeakers, setCollectedAudioSpeakers] = useState<string[]>([] as string[]);
    const [collectedAudio, setCollectedAudio] = useState<audioManagementDT[]>([] as audioManagementDT[]);
    const [checkingStatusData, setCheckingStatusData] = useState<checkingStatusDT[]>([] as checkingStatusDT[]);
    const [allCheckedAudiosData, setAllCheckedAudiosData] = useState<allCheckedAudioDT[]>([] as allCheckedAudioDT[]);
    const [annotationData, setAnnotationData] = useState<annotationDT[]>([] as annotationDT[]);
    const [collectAnnSenData, setCollectAnnSenData] = useState<collectAnnSenDataDT[]>([] as collectAnnSenDataDT[]);
    const [collectAnnWordData, setCollectAnnWordData] = useState<collectAnnSenDataDT[]>([] as collectAnnSenDataDT[]);
    const [collectAnnPhonemeData, setCollectAnnPhonemeData] = useState<collectAnnSenDataDT[]>([] as collectAnnSenDataDT[]);
    const [annotatedFilesData, setAnnotatedFilesData] = useState<annotatedFilesDT[]>([] as annotatedFilesDT[]);
    const [collectValSenData, setCollectValSenData] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[]);
    const [collectValWordData, setCollectValWordData] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[]);
    const [collectValPhonemeData, setCollectValPhonemeData] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[]);
    const [validatedFilesData, setValidatedFilesData] = useState<validatedFilesDT[]>([] as validatedFilesDT[])
    const [uploadAudioData, setUploadAudioData] = useState<uploadAudioDataDT[]>([] as uploadAudioDataDT[])
    const [checkingStatusUploadData, setCheckingStatusUploadData] = useState<checkingStatusUploadDataDT[]>([] as checkingStatusUploadDataDT[])
    const [allCheckedAudiosUploadData, setAllCheckedAudiosUploadData] = useState<allCheckedSpeechDT[]>([] as allCheckedSpeechDT[])
    const [annotationUploadData, setAnnotationUploadData] = useState<annotationUploadDT[]>([] as annotationUploadDT[])
    const [sentenceLevelUploadData, setSentenceLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [wordLevelUploadData, setWordLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [phonemeLevelUploadData, setPhonemeLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [annotatedFilesUploadData, setAnnotatedFilesUploadData] = useState<annotatedFilesUploadDT[]>([] as annotatedFilesUploadDT[])
    const [sentenceLevelUploadVal, setSentenceLevelUploadVal] = useState<sentenceLevelValUploadDT[]>([] as sentenceLevelValUploadDT[])
    const [wordLevelUploadVal, setWordLevelUploadVal] = useState<sentenceLevelValUploadDT[]>([] as sentenceLevelValUploadDT[])
    const [phonemeLevelUploadVal, setPhonemeLevelUploadVal] = useState<sentenceLevelValUploadDT[]>([] as sentenceLevelValUploadDT[])
    const [validatedFilesUploadData, setValidatedFilesUploadData] = useState<validatedFilesUploadDT[]>([] as validatedFilesUploadDT[])
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

    const getCollectedAudioData = () => {
        const res = audioManagementService.getCollectedAudioData();
        setCollectedAudio(res);
    }

    const getCheckingStatusData = () => {
        const res = audioManagementService.getCheckingStatusData();
        setCheckingStatusData(res);
    }

    const getAllCheckedAudiosData = () => {
        const res = audioManagementService.getAllCheckedAudiosData();
        setAllCheckedAudiosData(res);
    }

    const getAnnotationData = () => {
        const res = audioManagementService.getAnnotationData();
        setAnnotationData(res);
    }

    const getCollectAnnSenData = () => {
        const res = audioManagementService.getCollectAnnSenData();
        setCollectAnnSenData(res);
    }

    const getCollectAnnWordData = () => {
        const res = audioManagementService.getCollectAnnWordData();
        setCollectAnnWordData(res);
    }

    const getCollectAnnPhonemeData = () => {
        const res = audioManagementService.getCollectAnnPhonemeData();
        setCollectAnnPhonemeData(res);
    }

    const getAnnotatedFilesData = () => {
        const res = audioManagementService.getAnnotatedFilesData();
        setAnnotatedFilesData(res);
    }

    const getCollectValSenData = () => {
        const res = audioManagementService.getCollectValSenData();
        setCollectValSenData(res);
    }

    const getCollectValWordData = () => {
        const res = audioManagementService.getCollectValWordData();
        setCollectValWordData(res);
    }

    const getCollectValPhonemeData = () => {
        const res = audioManagementService.getCollectValPhonemeData();
        setCollectValPhonemeData(res);
    }

    const getValidatedFilesData = () => {
        const res = audioManagementService.getValidatedFilesData();
        setValidatedFilesData(res);
    }

    const getUploadAudioData = () => {
        const res = audioManagementService.getUploadAudiosData();
        setUploadAudioData(res);
    }

    const getCheckingStatusUploadData = () => {
        const res = audioManagementService.getCheckinStatusUploadData();
        setCheckingStatusUploadData(res);
    }

    const getAllCheckedAudiosUploadData = () => {
        const res = audioManagementService.getAllCheckedAudiosUploadData();
        setAllCheckedAudiosUploadData(res);
    }

    const getAnnotationUploadData = () => {
        const res = audioManagementService.getAnnotationUploadData();
        setAnnotationUploadData(res);
    }

    const getSentenceLevelUploadData = () => {
        const res = audioManagementService.getSentenceLevelUploadData();
        setSentenceLevelUploadData(res);
    }

    const getWordLevelUploadData = () => {
        const res = audioManagementService.getWordLevelUploadData();
        setWordLevelUploadData(res);
    }

    const getPhonemeLevelUploadData = () => {
        const res = audioManagementService.getPhonemeLevelUploadData();
        setPhonemeLevelUploadData(res);
    }

    const getAnnotatedFilesUploadData = () => {
        const res = audioManagementService.getAnnotatedFilesUploadData();
        setAnnotatedFilesUploadData(res);
    }

    const getSentenceLevelUploadVal = () => {
        const res = audioManagementService.getSentenceLevelUploadVal();

        setSentenceLevelUploadVal(res);
    }

    const getWordLevelUploadVal = () => {
        const res = audioManagementService.getWordLevelUploadVal();
        setWordLevelUploadVal(res);
    }

    const getPhonemeLevelUploadVal = () => {
        const res = audioManagementService.getPhonemeLevelUploadVal();
        setPhonemeLevelUploadVal(res);
    }

    const getValidatedFilesUploadData = () => {
        const res = audioManagementService.getValidatedFilesUploadData();
        setValidatedFilesUploadData(res);
    }

    const postReassignAudios = async (ids: string[]) => {
        audioManagementService.postReassignAudios(ids);
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
                postReassignAudios
            }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;