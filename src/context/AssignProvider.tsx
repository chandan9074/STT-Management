import React, { createContext, useEffect, useState } from 'react';

interface ContextProps {
    criterias: any,
    singleCriteria: any
    saveCriteria: (value: any) => void,
    getSingleCriteria: (value: any) => void,
    sumTarget: number | undefined,
    setEmptySingleCriteria: () => void
}

export const AssignContext = createContext({} as ContextProps);

const AssignProvider = ({ children }: { children: any }) => {

    const [criterias, setCriterias] = useState<any>([]);

    const [singleCriteria, setSingleCriteria] = useState<any>({})

    const [sumTarget, setSumTarget] = useState<number>();

    const [editId, setEditId] = useState<number>();

 

    const saveCriteria = (data: any) => {
        // const filteredCriterias = criterias.filter((criteria: any, i: number) => criteria.target !== data.target);
        const filteredCriterias = criterias.filter((criteria: any, i: number) => i !== editId);

        setCriterias([...filteredCriterias, data]);

        // setCriterias([...criterias, data]);
    }

    const getSingleCriteria = (id: number) => {
        const _data = criterias?.filter((value: any, i: number) => i === id);
        setSingleCriteria(_data[0])
        setEditId(id);
    }

    const setEmptySingleCriteria = () => {
        setSingleCriteria({});
    }

    useEffect(() => {
        const targetSum = criterias.reduce((acc: any, item: any) => acc + item.target, 0);
        setSumTarget(targetSum);

    }, [criterias]);


    return (
        <AssignContext.Provider
            value={{
                criterias,
                saveCriteria,
                sumTarget,
                singleCriteria,
                getSingleCriteria,
                setEmptySingleCriteria
            }}
        >
            {children}
        </AssignContext.Provider>
    );
};

export default AssignProvider;