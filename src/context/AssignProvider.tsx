import React, { createContext, useEffect, useState } from 'react';

interface ContextProps {
    criterias: any,
    singleCriteria: any
    saveCriteria: (value: any) => void,
    getSingleCriteria: (value: any) => void,
    sumTarget: number | undefined
}

export const AssignContext = createContext({} as ContextProps);

const AssignProvider = ({ children }: { children: any }) => {

    const [criterias, setCriterias] = useState<any>([]);

    const [singleCriteria, setSingleCriteria] = useState<any>({})

    const [sumTarget, setSumTarget] = useState<number>();

    const saveCriteria = (data: any) => {
        setCriterias([...criterias, data]);
    }

    const getSingleCriteria = (id: number) => {
       const _data = criterias?.filter((value: any) => value.target === id);
       setSingleCriteria(_data[0])
    }

    useEffect(() => {
        const targetSum = criterias.reduce((acc: any, item: any) => acc + item.target, 0);
        setSumTarget(targetSum);

    }, [criterias])

    return (
        <AssignContext.Provider
            value={{
                criterias,
                saveCriteria,
                sumTarget,
                singleCriteria,
                getSingleCriteria
            }}
        >
            {children}
        </AssignContext.Provider>
    );
};

export default AssignProvider;