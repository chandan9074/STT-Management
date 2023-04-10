import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { allCheckedAudioDT, allCheckedSpeechDT, annotatedFilesDT, annotationDT, annotationUploadDT, audioManagementDT, checkingStatusDT, checkingStatusUploadDataDT, collectAnnSenDataDT, collectValSenDataDT, sentenceLevelUploadDT, uploadAudioDataDT } from "../types/audioManagementTypes";

interface ContextProps {
    getScriptFilter: () => void;
    getCollectedAudioCollector: () => void;
    collectedAudioCollector: string[];
    scriptFilter: string[];
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
    annotatedFilesUploadData: annotatedFilesDT[]
    getSentenceLevelUploadVal: () => void;
    sentenceLevelUploadVal: collectValSenDataDT[]
    getWordLevelUploadVal: () => void;
    wordLevelUploadVal: collectValSenDataDT[];
    getPhonemeLevelUploadVal: () => void;
    phonemeLevelUploadVal: collectValSenDataDT[];
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    const [collectedAudioCollector, setCollectedAudioCollector] = useState<string[]>([] as string[]);
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
    const [uploadAudioData, setUploadAudioData] = useState<uploadAudioDataDT[]>([] as uploadAudioDataDT[])
    const [checkingStatusUploadData, setCheckingStatusUploadData] = useState<checkingStatusUploadDataDT[]>([] as checkingStatusUploadDataDT[])
    const [allCheckedAudiosUploadData, setAllCheckedAudiosUploadData] = useState<allCheckedSpeechDT[]>([] as allCheckedSpeechDT[])
    const [annotationUploadData, setAnnotationUploadData] = useState<annotationUploadDT[]>([] as annotatedFilesDT[])
    const [sentenceLevelUploadData, setSentenceLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [wordLevelUploadData, setWordLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [phonemeLevelUploadData, setPhonemeLevelUploadData] = useState<sentenceLevelUploadDT[]>([] as sentenceLevelUploadDT[])
    const [annotatedFilesUploadData, setAnnotatedFilesUploadData] = useState<annotatedFilesDT[]>([] as annotatedFilesDT[])
    const [sentenceLevelUploadVal, setSentenceLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])
    const [wordLevelUploadVal, setWordLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])
    const [phonemeLevelUploadVal, setPhonemeLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])

    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilters();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        console.log("hello", concatenatedStrings);
        setScriptFilter(concatenatedStrings);
    }

    const getCollectedAudioCollector = () => {
        const res = audioManagementService.getCollectedAudioCollector();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioCollector(concatenatedStrings);
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


    return (
        <AudioManagementContext.Provider
            value={{
                getScriptFilter,
                scriptFilter,
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
                collectedAudioCollector,
                getCollectedAudioCollector
            }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;