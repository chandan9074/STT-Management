import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";

interface ContextProps {
    getScriptFilter: () => void;
    getCollectedAudioCollector: () => void;
    collectedAudioCollector: string[];
    scriptFilter: string[];
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);
    const [collectedAudioCollector, setCollectedAudioCollector] = useState<string[]>([] as string[]);

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

    return (
        <AudioManagementContext.Provider
            value={{ getScriptFilter, scriptFilter, collectedAudioCollector, getCollectedAudioCollector }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;
