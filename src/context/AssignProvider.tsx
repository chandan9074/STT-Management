import React, { createContext, useState } from 'react';

interface ContextProps {
    // modalOpen: boolean;
    // modalData: string;
    // setModalData: React.Dispatch<React.SetStateAction<string>>;
    // setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // uploadCsv: (formData: any) => void;
    criterias: any,
    saveCriteria: (value: any) => void
}

export const AssignContext = createContext({} as ContextProps);

const AssignProvider = ({ children }: { children: any }) => {

    const [criterias, setCriterias] = useState<any>([]);

    const saveCriteria = (data: any) => {
        setCriterias([...criterias, data]);
    }
    
    return (
        <AssignContext.Provider
            value={{ 
                criterias,
                saveCriteria
                }}
        >
            {children}
        </AssignContext.Provider>
    );
};

export default AssignProvider;