import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { scriptFilterDT, audioManagementDT } from "../types/audioManagementTypes";

interface ContextProps {
    getScriptFilter: () => void;
    scriptFilter: scriptFilterDT[];
    getCollectedAudioData: () => void;
    collectedAudio:  audioManagementDT[];
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<scriptFilterDT[]>([] as scriptFilterDT[]);
    const [collectedAudio, setCollectedAudio] = useState<audioManagementDT[]>([] as audioManagementDT[]);

    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilter();
        setScriptFilter(res);
    }

    const getCollectedAudioData = () => {
        const res = audioManagementService.getCollectedAudioData();
        setCollectedAudio(res);
    }

    return (
        <AudioManagementContext.Provider
            value={{ getScriptFilter, scriptFilter, getCollectedAudioData, collectedAudio }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;
