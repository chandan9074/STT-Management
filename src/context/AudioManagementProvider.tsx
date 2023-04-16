import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { allCheckedAudioDT, allCheckedSpeechDT, annotatedFilesDT, annotatedFilesUploadDT, annotationDT, annotationUploadDT, audioManagementDT, checkingStatusDT, checkingStatusUploadDataDT, collectAnnSenDataDT, collectValSenDataDT, sentenceLevelUploadDT, uploadAudioDataDT, validatedFilesDT, validatedFilesUploadDT } from "../types/audioManagementTypes";

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
    sentenceLevelUploadVal: collectValSenDataDT[]
    getWordLevelUploadVal: () => void;
    wordLevelUploadVal: collectValSenDataDT[];
    getPhonemeLevelUploadVal: () => void;
    phonemeLevelUploadVal: collectValSenDataDT[];
    getValidatedFilesUploadData: () => void
    validatedFilesUploadData: validatedFilesUploadDT[]
    getCollectedAudioSpeakers: () => void;
    collectedAudioSpeakers: string[];
    getCollectedAudioCheckingStatusScript: () => void;
    collectedAudioCheckingStatusScript: string[];
    getCollectedAudioCheckingStatusSpeakers: () => void;
    collectedAudioCheckingStatusSpeaker: string[];
    getCollectedAudioCheckingStatusCollector: () => void;
    collectedAudioCheckingStatusCollector: string[];
    collectedAudioAllCheckingStatusScript: string[];
    getCollectedAudioAllCheckingStatusScript: () => void;
    collectedAudioAllCheckingStatusSpeaker: string[];
    getCollectedAudioAllCheckingStatusSpeakers: () => void;
    collectedAudioAllCheckingStatusCollector: string[];
    getCollectedAudioAllCheckingStatusCollector: () => void;
    collectedAudioAllCheckingStatusChecker: string[];
    getCollectedAudioAllCheckingStatusChecker: () => void;
    collectedAudioAnnotationTypeScript: string[];
    getCollectedAudioAnnotationTypeScript: () => void;
    collectedAudioAnnotationTypeSpeaker: string[];
    getCollectedAudioAnnotationTypeSpeakers: () => void;
    collectedAudioAnnotationSentenceSpeaker: string[];
    getCollectedAudioAnnotationSentenceSpeakers: () => void;
    collectedAudioAnnotationSentenceChecker: string[];
    getCollectedAudioAnnotationSentenceChecker: () => void;
    collectedAudioAnnotationWordSpeaker: string[];
    getCollectedAudioAnnotationWordSpeakers: () => void;
    collectedAudioAnnotationWordChecker: string[];
    getCollectedAudioAnnotationWordChecker: () => void;
    collectedAudioAnnotationPhonemeSpeaker: string[];
    getCollectedAudioAnnotationPhonemeSpeakers: () => void;
    collectedAudioAnnotationPhonemeChecker: string[];
    getCollectedAudioAnnotationPhonemeChecker: () => void;
    collectedAudioAnnotationAnnotatedScript: string[];
    getCollectedAudioAnnotationAnnotatedScript: () => void;
    collectedAudioAnnotationAnnotatedSpeaker: string[];
    getCollectedAudioAnnotationAnnotatedSpeakers: () => void;
    collectedAudioAnnotationAnnotatedChecker: string[];
    getCollectedAudioAnnotationAnnotatedChecker: () => void;
    getCollectedAudioAnnotationAnnotatedCollector: () => void;
    collectedAudioAnnotationAnnotatedCollector: string[];
    getCollectedAudioAnnotationAnnotatedAnnotator: () => void;
    collectedAudioAnnotationAnnotatedAnnotator: string[];
    collectedAudioValidationSentenceSpeaker: string[];
    getCollectedAudioValidationSentenceSpeakers: () => void;
    collectedAudioValidationSentenceChecker: string[];
    getCollectedAudioValidationSentenceChecker: () => void;
    collectedAudioValidationSentenceAnnotator: string[];
    getCollectedAudioValidationSentenceAnnotator: () => void;
    collectedAudioValidationWordSpeaker: string[];
    getCollectedAudioValidationWordSpeakers: () => void;
    collectedAudioValidationWordChecker: string[];
    getCollectedAudioValidationWordChecker: () => void;
    collectedAudioValidationWordAnnotator: string[];
    getCollectedAudioValidationWordAnnotator: () => void;
    collectedAudioValidationPhonemeSpeaker: string[];
    getCollectedAudioValidationPhonemeSpeakers: () => void;
    collectedAudioValidationPhonemeChecker: string[];
    getCollectedAudioValidationPhonemeChecker: () => void;
    collectedAudioValidationPhonemeAnnotator: string[];
    getCollectedAudioValidationPhonemeAnnotator: () => void;
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    const [collectedAudioCollector, setCollectedAudioCollector] = useState<string[]>([] as string[]);
    const [collectedAudioSpeakers, setCollectedAudioSpeakers] = useState<string[]>([] as string[]);
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
    const [sentenceLevelUploadVal, setSentenceLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])
    const [wordLevelUploadVal, setWordLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])
    const [phonemeLevelUploadVal, setPhonemeLevelUploadVal] = useState<collectValSenDataDT[]>([] as collectValSenDataDT[])
    const [validatedFilesUploadData, setValidatedFilesUploadData] = useState<validatedFilesUploadDT[]>([] as validatedFilesUploadDT[])
    const [collectedAudioCheckingStatusScript, setCollectedAudioCheckingStatusScript] = useState<string[]>([] as string[]);
    const [collectedAudioCheckingStatusCollector, setCollectedAudioCheckingStatusCollector] = useState<string[]>([] as string[]);
    const [collectedAudioCheckingStatusSpeaker, setCollectedAudioCheckingStatusSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAllCheckingStatusScript, setCollectedAudioAllCheckingStatusScript] = useState<string[]>([] as string[]);
    const [collectedAudioAllCheckingStatusCollector, setCollectedAudioAllCheckingStatusCollector] = useState<string[]>([] as string[]);
    const [collectedAudioAllCheckingStatusChecker, setCollectedAudioAllCheckingStatusChecker] = useState<string[]>([] as string[]);
    const [collectedAudioAllCheckingStatusSpeaker, setCollectedAudioAllCheckingStatusSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationTypeScript, setCollectedAudioAnnotationTypeScript] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationTypeSpeaker, setCollectedAudioAnnotationTypeSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationSentenceSpeaker, setCollectedAudioAnnotationSentenceSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationSentenceChecker, setCollectedAudioAnnotationSentenceChecker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationWordSpeaker, setCollectedAudioAnnotationWordSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationWordChecker, setCollectedAudioAnnotationWordChecker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationPhonemeSpeaker, setCollectedAudioAnnotationPhonemeSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationPhonemeChecker, setCollectedAudioAnnotationPhonemeChecker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationAnnotatedScript, setCollectedAudioAnnotationAnnotatedScript] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationAnnotatedSpeaker, setCollectedAudioAnnotationAnnotatedSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationAnnotatedChecker, setCollectedAudioAnnotationAnnotatedChecker] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationAnnotatedCollector, setCollectedAudioAnnotationAnnotatedCollector] = useState<string[]>([] as string[]);
    const [collectedAudioAnnotationAnnotatedAnnotator, setCollectedAudioAnnotationAnnotatedAnnotator] = useState<string[]>([] as string[]);
    const [collectedAudioValidationSentenceSpeaker, setCollectedAudioValidationSentenceSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationSentenceChecker, setCollectedAudioValidationSentenceChecker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationSentenceAnnotator, setCollectedAudioValidationSentenceAnnotator] = useState<string[]>([] as string[]);
    const [collectedAudioValidationWordSpeaker, setCollectedAudioValidationWordSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationWordChecker, setCollectedAudioValidationWordChecker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationWordAnnotator, setCollectedAudioValidationWordAnnotator] = useState<string[]>([] as string[]);
    const [collectedAudioValidationPhonemeSpeaker, setCollectedAudioValidationPhonemeSpeaker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationPhonemeChecker, setCollectedAudioValidationPhonemeChecker] = useState<string[]>([] as string[]);
    const [collectedAudioValidationPhonemeAnnotator, setCollectedAudioValidationPhonemeAnnotator] = useState<string[]>([] as string[]);




    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilters();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setScriptFilter(concatenatedStrings);
    }

    const getCollectedAudioCollector = () => {
        const res = audioManagementService.getCollectedAudioCollector();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioCollector(concatenatedStrings);
    }

    const getCollectedAudioSpeakers = () => {
        const res = audioManagementService.getCollectedAudioSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioSpeakers(concatenatedStrings);
    }

    const getCollectedAudioCheckingStatusScript = () => {
        const res = audioManagementService.getCollectedAudioCheckingStatusScript();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setCollectedAudioCheckingStatusScript(concatenatedStrings);
    }

    const getCollectedAudioCheckingStatusCollector = () => {
        const res = audioManagementService.getCollectedAudioCheckingStatusCollector();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioCheckingStatusCollector(concatenatedStrings);
    }

    const getCollectedAudioCheckingStatusSpeakers = () => {
        const res = audioManagementService.getCollectedAudioCheckingStatusSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioCheckingStatusSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAllCheckingStatusScript = () => {
        const res = audioManagementService.getCollectedAudioAllCheckingStatusScript();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setCollectedAudioAllCheckingStatusScript(concatenatedStrings);
    }

    const getCollectedAudioAllCheckingStatusChecker = () => {
        const res = audioManagementService.getCollectedAudioAllCheckingStatusChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAllCheckingStatusChecker(concatenatedStrings);
    }

    const getCollectedAudioAllCheckingStatusCollector = () => {
        const res = audioManagementService.getCollectedAudioAllCheckingStatusCollector();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAllCheckingStatusCollector(concatenatedStrings);
    }

    const getCollectedAudioAllCheckingStatusSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAllCheckingStatusSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAllCheckingStatusSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationTypeScript = () => {
        const res = audioManagementService.getCollectedAudioAnnotationTypeScript();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setCollectedAudioAnnotationTypeScript(concatenatedStrings);
    }

    const getCollectedAudioAnnotationTypeSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAnnotationTypeSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAnnotationTypeSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationSentenceChecker = () => {
        const res = audioManagementService.getCollectedAudioAnnotationSentenceChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationSentenceChecker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationSentenceSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAnnotationSentenceSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAnnotationSentenceSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationWordChecker = () => {
        const res = audioManagementService.getCollectedAudioAnnotationWordChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationWordChecker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationWordSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAnnotationWordSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAnnotationWordSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationPhonemeChecker = () => {
        const res = audioManagementService.getCollectedAudioAnnotationPhonemeChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationPhonemeChecker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationPhonemeSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAnnotationPhonemeSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAnnotationPhonemeSpeaker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationAnnotatedScript = () => {
        const res = audioManagementService.getCollectedAudioAnnotationAnnotatedScript();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "... - " + item.title);
        setCollectedAudioAnnotationAnnotatedScript(concatenatedStrings);
    }

    const getCollectedAudioAnnotationAnnotatedAnnotator = () => {
        const res = audioManagementService.getCollectedAudioAnnotationAnnotatedAnnotator();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationAnnotatedAnnotator(concatenatedStrings);
    }

    const getCollectedAudioAnnotationAnnotatedChecker = () => {
        const res = audioManagementService.getCollectedAudioAnnotationAnnotatedChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationAnnotatedChecker(concatenatedStrings);
    }

    const getCollectedAudioAnnotationAnnotatedCollector = () => {
        const res = audioManagementService.getCollectedAudioAnnotationAnnotatedCollector();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioAnnotationAnnotatedCollector(concatenatedStrings);
    }

    const getCollectedAudioAnnotationAnnotatedSpeakers = () => {
        const res = audioManagementService.getCollectedAudioAnnotationAnnotatedSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioAnnotationAnnotatedSpeaker(concatenatedStrings);
    }

    const getCollectedAudioValidationSentenceSpeakers = () => {
        const res = audioManagementService.getCollectedAudioValidationSentenceSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioValidationSentenceSpeaker(concatenatedStrings);
    }

    const getCollectedAudioValidationSentenceChecker = () => {
        const res = audioManagementService.getCollectedAudioValidationSentenceChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationSentenceChecker(concatenatedStrings);
    }

    const getCollectedAudioValidationSentenceAnnotator = () => {
        const res = audioManagementService.getCollectedAudioValidationSentenceAnnotator();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationSentenceAnnotator(concatenatedStrings);
    }

    const getCollectedAudioValidationWordSpeakers = () => {
        const res = audioManagementService.getCollectedAudioValidationWordSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioValidationWordSpeaker(concatenatedStrings);
    }

    const getCollectedAudioValidationWordChecker = () => {
        const res = audioManagementService.getCollectedAudioValidationWordChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationWordChecker(concatenatedStrings);
    }

    const getCollectedAudioValidationWordAnnotator = () => {
        const res = audioManagementService.getCollectedAudioValidationWordAnnotator();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationWordAnnotator(concatenatedStrings);
    }

    const getCollectedAudioValidationPhonemeSpeakers = () => {
        const res = audioManagementService.getCollectedAudioValidationPhonemeSpeakers();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name + " - " + item.gender);
        setCollectedAudioValidationPhonemeSpeaker(concatenatedStrings);
    }

    const getCollectedAudioValidationPhonemeChecker = () => {
        const res = audioManagementService.getCollectedAudioValidationPhonemeChecker();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationPhonemeChecker(concatenatedStrings);
    }

    const getCollectedAudioValidationPhonemeAnnotator = () => {
        const res = audioManagementService.getCollectedAudioValidationPhonemeAnnotator();
        const concatenatedStrings = res.map(item => item.id + " - " + item.name);
        setCollectedAudioValidationPhonemeAnnotator(concatenatedStrings);
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
                getCollectedAudioCollector,
                collectedAudioCollector,
                getValidatedFilesUploadData,
                validatedFilesUploadData,
                collectedAudioSpeakers,
                getCollectedAudioSpeakers,
                collectedAudioCheckingStatusCollector,
                getCollectedAudioCheckingStatusCollector,
                collectedAudioCheckingStatusSpeaker,
                getCollectedAudioCheckingStatusSpeakers,
                collectedAudioCheckingStatusScript,
                getCollectedAudioCheckingStatusScript,
                collectedAudioAllCheckingStatusChecker,
                getCollectedAudioAllCheckingStatusChecker,
                collectedAudioAllCheckingStatusSpeaker,
                getCollectedAudioAllCheckingStatusSpeakers,
                collectedAudioAllCheckingStatusScript,
                getCollectedAudioAllCheckingStatusScript,
                collectedAudioAllCheckingStatusCollector,
                getCollectedAudioAllCheckingStatusCollector,
                collectedAudioAnnotationTypeScript,
                collectedAudioAnnotationTypeSpeaker,
                getCollectedAudioAnnotationTypeScript,
                getCollectedAudioAnnotationTypeSpeakers,
                collectedAudioAnnotationSentenceChecker,
                collectedAudioAnnotationSentenceSpeaker,
                getCollectedAudioAnnotationSentenceChecker,
                getCollectedAudioAnnotationSentenceSpeakers,
                collectedAudioAnnotationWordChecker,
                collectedAudioAnnotationWordSpeaker,
                getCollectedAudioAnnotationWordChecker,
                getCollectedAudioAnnotationWordSpeakers,
                collectedAudioAnnotationPhonemeChecker,
                collectedAudioAnnotationPhonemeSpeaker,
                getCollectedAudioAnnotationPhonemeChecker,
                getCollectedAudioAnnotationPhonemeSpeakers,
                collectedAudioAnnotationAnnotatedAnnotator,
                collectedAudioAnnotationAnnotatedSpeaker,
                collectedAudioAnnotationAnnotatedChecker,
                collectedAudioAnnotationAnnotatedCollector,
                getCollectedAudioAnnotationAnnotatedAnnotator,
                collectedAudioAnnotationAnnotatedScript,
                getCollectedAudioAnnotationAnnotatedSpeakers,
                getCollectedAudioAnnotationAnnotatedChecker,
                getCollectedAudioAnnotationAnnotatedCollector,
                getCollectedAudioAnnotationAnnotatedScript,
                collectedAudioValidationSentenceChecker,
                collectedAudioValidationSentenceSpeaker,
                collectedAudioValidationSentenceAnnotator,
                getCollectedAudioValidationSentenceChecker,
                getCollectedAudioValidationSentenceSpeakers,
                getCollectedAudioValidationSentenceAnnotator,
                collectedAudioValidationWordAnnotator,
                collectedAudioValidationWordChecker,
                collectedAudioValidationWordSpeaker,
                getCollectedAudioValidationWordAnnotator,
                getCollectedAudioValidationWordChecker,
                getCollectedAudioValidationWordSpeakers,
                collectedAudioValidationPhonemeAnnotator,
                collectedAudioValidationPhonemeChecker,
                collectedAudioValidationPhonemeSpeaker,
                getCollectedAudioValidationPhonemeAnnotator,
                getCollectedAudioValidationPhonemeChecker,
                getCollectedAudioValidationPhonemeSpeakers
            }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;