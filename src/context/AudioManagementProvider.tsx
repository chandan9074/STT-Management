import { ReactNode, createContext, useState } from "react";
import audioManagementService from "../services/audioManagementService";

interface ContextProps {
    getScriptFilter: () => void;
    scriptFilter: string[];
    func: () => void;
}

export const AudioManagementContext = createContext({} as ContextProps);

const AudioManagementProvider = ({ children }: { children: ReactNode }) => {

    const [scriptFilter, setScriptFilter] = useState<string[]>([] as string[]);

    const getScriptFilter = () => {
        const res = audioManagementService.getScriptFilters();
        const concatenatedStrings = res.map(item => item.id.substring(0, 3) + "...-" + item.title);
        console.log("hello", concatenatedStrings);
        setScriptFilter(concatenatedStrings);
    }

    const func = () => {
        console.log("hello");
    }

    return (
        <AudioManagementContext.Provider
            value={{ getScriptFilter, scriptFilter, func }}
        >
            {children}
        </AudioManagementContext.Provider>
    );
};

export default AudioManagementProvider;
