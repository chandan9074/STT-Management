import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";
import { scriptFilterDT } from "../types/audioManagementTypes";

interface ContextProps {
    getScriptFilter: () => void;
    scriptFilter: scriptFilterDT[];
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<scriptFilterDT[]>([] as scriptFilterDT[]);

    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilter();
        setScriptFilter(res);
    }

    return (
        <AudioManagementContext.Provider
            value={{ getScriptFilter, scriptFilter }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;
