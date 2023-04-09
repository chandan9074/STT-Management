import { useContext, useEffect, useState } from 'react';
import { Filter } from '../../../components/Filter';
import { SearchBox } from '../../../components/SearchBox';
import Table from '../../../components/Table';
import { collectedAudio, collectedAudioFilterData } from '../../../data/audioManagement/AudioManagementData';
import { targetFilterListDT } from '../../../types/assignTypes';
import { AudioManagementContext } from '../../../context/AudioManagementProvider';


const CollectedAudio = () => {
    return (
        // <Layouts.Third>
        <div>
            <Header />
            <Table.Type16 data={collectedAudio} />
            {/* <Outlet /> */}
        </div>
        // </Layouts.Third>
    );
};

export default CollectedAudio;


const Header = () => {
    const [count, setCount] = useState<number>(0);
    const [filterList, setFilterList] = useState<targetFilterListDT>({
        script: [],
        collector_district: [],
        collector_details: [],
        collector: [],
        speaker: [],
        audioSubmissionPeriod: []
    })

    const { scriptFilter, getScriptFilter } = useContext(AudioManagementContext)

    useEffect(() => {
        let count = 0;
        for (const key in filterList) {
            if (filterList[key].length > 0) {
                count += 1
            }
        }
        setCount(count)
    }, [filterList]);

    // useEffect(() => {
    //     getScriptFilter();
    // }, [])

    useEffect(() => {
        if (scriptFilter) {
            // const collectorDetailsObject = collectedAudioFilterData.find(obj => obj.key === "collector");
            // if (collectorDetailsObject && collectorDetailsObject.selects) {
            //     const nestedObject = collectorDetailsObject.selects.find(obj => obj.key === "collector_details");
            //     if (nestedObject) {
            //         nestedObject.child = scriptFilter;
            //     }
            // }
            const collectorDetailsObject = collectedAudioFilterData.find(obj => obj.key === "script");
            if (collectorDetailsObject) {
                collectorDetailsObject.child = scriptFilter;
            }
        }
        console.log("----", collectedAudioFilterData, scriptFilter)

    }, [scriptFilter]);


    const handleFilterList = (key: string, value: string) => {
        if (filterList[key].includes(value)) {
            if (key === "collector_district" || key === "collector_details") {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                    collector: filterList.collector.filter((item) => item !== value),
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: filterList[key].filter((item) => item !== value),
                });
            }
        } else {
            if (key === "collector_district" || key === "collector_details") {
                console.log("hellod aalsdkf", key, value)
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                    collector: [...filterList.collector, value],
                });
            }
            else {
                setFilterList({
                    ...filterList,
                    [key]: [...filterList[key], value],
                });
            }
        }
    }
    const handleReset = (key: string, type: "single" | "all") => {
        if (type === "all") {
            setFilterList({
                script: [],
                collector: [],
                speaker: [],
                audioSubmissionPeriod: []
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
        <div className='ml-6 mr-4 mb-5 flex items-center justify-between'>
            <div>
                <h1 className='text-heading-6 font-semibold text-ct-blue-95 leading-6'>List of Raw Audio</h1>
                <p className='text-small text-ct-blue-90-70% mt-1.5'>List of raw audios that is not being picked yet</p>
            </div>
            <div className='flex items-center gap-x-3'>
                <SearchBox.Type1 inputWidth="w-44" placeholder="Search" bgColor="bg-blue-gray-A10" textColor="text-ct-blue-90-70%" />
                <Filter.Type2 popupClassName='audio_submission_date_picker' handleSubmitFilter={handleSubmitFilter} filterData={collectedAudioFilterData} count={count} filterList={filterList} handleReset={handleReset} handleFilterList={handleFilterList} />
            </div>
        </div>
    )
}