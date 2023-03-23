import { useEffect, useState } from 'react';
import { speechFilter } from '../../../../data/userManagement/activityData';
import { targetFilterListDT, targetSpeechDT } from '../../../../types/assignTypes';
import { Filter } from '../../../Filter';
import { SearchBox } from '../../../SearchBox';
import Table from '../../../Table';

type Props = {
    data: targetSpeechDT
}

const SpeechTable = ({ data }: Props) => {
    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        submissionDate: [],
        recordingArea: [],
        recordingDistance: [],
        status: [],
        speakerLocality: [],
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
                submissionDate: [],
                recordingArea: [],
                recordingDistance: [],
                status: [],
                speakerLocality: [],
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
    return (
        <div className='mt-6'>
            <div className='mb-5 flex items-center justify-between'>
                <h2 className='text-ct-blue-95 text-heading-6 font-medium'>All Speeches</h2>
                <div className='flex items-center gap-x-3'>
                    <SearchBox.Type1 inputWidth="w-52" placeholder="Search with script ID, Title..." paddingX="px-3" paddingY="py-2" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                    <Filter.Type2 handleSubmitFilter={handleSubmitFilter} filterData={speechFilter} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
                </div>
            </div>
            <Table.Type15 data={data} />
        </div>
    );
};

export default SpeechTable;