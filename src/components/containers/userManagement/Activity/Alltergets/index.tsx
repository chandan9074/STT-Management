import React, { useEffect, useState } from 'react';
import { assignSpeechData, targetData, targetFilter } from '../../../../../data/assign/AssignData';
import { targetFilterListDT } from '../../../../../types/assignTypes';
import Buttons from '../../../../Buttons';
import { Filter } from '../../../../Filter';
import { SearchBox } from '../../../../SearchBox';
import Table from '../../../../Table';

const AllTergets = () => {
    const [activeTab, setActiveTab] = useState<string>("Pending");
    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        targetStatus: [],
        speechStatus: [],
    })

    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                count += 1
            }
        }
        setCount(count)
    }, [filterList]);

    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            setFilterList({
                ...filterList,
                [key]: filterList[key].filter((item) => item !== value),
            });
        } else {
            setFilterList({
                ...filterList,
                [key]: [...filterList[key], value],
            });
        }
    }
    const handleReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setFilterList({
                targetStatus: [],
                speechStatus: [],
            })
        }
        else {
            setFilterList({
                ...filterList,
                [key]: [],
            });
        }
    }

    const handleSubmitFilter = () => {

    }

    const allTergetMenu = (key: string) => {
        const Category: any = {
            "Pending": <><Table.Type7 data={targetData} /></>,
            "Completed": <> </>,
            "All Speeches": <><Table.Type13 data={assignSpeechData} /></>
        };
        return Category[key];
    };
    return (
        <div>
            <div className='flex justify-between mt-9 mb-6'>
                <div className='flex gap-6 items-center'>
                    <p className='text-heading-6 font-medium text-ct-blue-95'>All Targets</p>
                    <Buttons.TabButton.Secondary setActiveData={setActiveTab} tabLabel={['Pending', "Completed", "All Speeches"]} />
                </div>
                <div className='flex items-center gap-x-3'>
                    <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                    <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={targetFilter} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                </div>
            </div>
            <div>
                {allTergetMenu(activeTab)}
            </div>
        </div>
    );
};

export default AllTergets;