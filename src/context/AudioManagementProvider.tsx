import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { audioManagementDT } from "../types/audioManagementTypes";

interface ContextProps {
    getScriptFilter: () => void;
    scriptFilter: string[];
    getCollectedAudioData: () => void;
    collectedAudio:  audioManagementDT[];
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    const [collectedAudio, setCollectedAudio] = useState<audioManagementDT[]>([] as audioManagementDT[]);

    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilters();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "...-" + item.title);
        console.log("hello", concatenatedStrings);
        setScriptFilter(concatenatedStrings);
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
